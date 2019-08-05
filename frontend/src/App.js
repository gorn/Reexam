import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Post from './components/Post';
import TvChannels from "./components/TvChannels";
import Locations from "./components/Locations";
import JobPosts from "./components/JobPosts";
import Job from "./components/Job";
import Login from "./components/Login";
import AuthServise from "./components/AuthServise";
import SuccessLogin from "./components/LoginSuccess";


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            tvchannels: [],
            programs: [],
            user: {}
        };
    }

    channelsStore(){
        let tvchannels = this.state.tvchannels;
        localStorage.setItem("tvchannels", JSON.stringify(tvchannels))
    }

    programStore(){
        let programs = this.state.programs;
        localStorage.setItem("programs", JSON.stringify(programs))
    }

    componentDidMount() {
        //await data.
        this.getPrograms();
        this.getTvChannels();
    }

    async getPrograms () {
        const response = await fetch(
            `https://jobappexam.herokuapp.com/api/programs`
        );
        const json = await response.json();
        this.setState({ jobs: json });
        this.programStore();
    }

    getTvChannels () {
        fetch(`https://jobappexam.herokuapp.com/api/tvchannels`)
             .then(response => response.json())
             .then(res => {this.setState({ tvchannels: res.tvchannels }); } );
        this.channelsStore();
    };

    getProgramId (id)  {
        let programPosition = this.state.programs.find(el => el._id === id);
        return programPosition;
    };

    renderProgram = (props, id) => {
        let program = this.getProgramId(id);
        return <Program {...props}
                    program={program}
                    programs={this.state.programs}
        />
    };


    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path={'/'}
                               render={(props) =>
                                   <div>
                                       <TvChannels {...props} programs={this.state.programs}
                                                       tvchannels={this.state.tvchannels}/>
                                   </div>
                               }
                        />

                        <Route exact path={`/jobs/`}
                               render={(props) =>
                                   <TvChannels {...props}
                                               jobs={this.state.jobs}
                                               category={props.match.params.category}
                                               area={this.state.area}
                                   />
                               }
                        />

                        <Route exact path={`/programs/:tvchannels`}
                               render={(props) =>
                                   <JobPosts {...props}
                                                 jobs={this.state.jobs}
                                                 category={props.match.params.category}
                                   />
                               }
                        />
                        <Route exact path={'/program/:id'}
                               render={(props) =>
                                   this.renderProgram(props, props.match.params.id)
                               }
                        />
                        <Route exact path={'/login'}
                               render={(props) =>
                                   <div>
                                       <Login {...props}/>
                                   </div>
                               }
                        />
                        {/*<Route path="/loginSuccess" component={AuthServise(SuccessLogin)} />*/}
                        {/*<Route exact path={'/post'}*/}
                               {/*render={(props) =>*/}
                                   {/*<Post {...props}*/}
                                         {/*categories={this.state.categories}*/}
                                         {/*areas={this.state.areas}*/}
                                   {/*/>*/}
                               {/*}*/}
                        {/*/>*/}

                    </Switch>
                </Router>
            </div>

        );
    }
}

export default App;