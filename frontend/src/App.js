import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TvChannels from "./components/TvChannels";
import Programs from "./components/Programs";
import Program from "./components/Program";
import Login from "./components/Login";


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            tvchannels: [],
            programs: []
        }
        ;
        console.log(this.state);
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
        const response = await fetch(`https://jobappexam.herokuapp.com/api/programs`);
        const json = await response.json();
        this.setState({ programs: json });
        this.programStore();
    }

    async getTvChannels(){
        const response = await fetch(`https://jobappexam.herokuapp.com/api/tvchannel`);
        const json = await response.json();
        this.setState({tvchannels: json});
        this.channelsStore();
    }


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

                        <Route exact path={`/programs/:tvchannelname`}
                               render={(props) =>
                                   <Programs {...props}
                                                 programs={this.state.programs}
                                                 tvchannels={this.state.tvchannels}
                                   />
                               }
                        />
                        <Route exact path={'/program/:programid'}
                               render={(props) =>
                                <Program {...props}
                                    programs={this.state.programs}
                                    tvchannels={this.state.tvchannels}
                                />
                            }
                     />
                        <Route exact path={'/login'}
                               render={(props) =>
                                   <div>
                                       <Login {...props}/>
                                   </div>
                               }
                        />

                    </Switch>
                </Router>
            </div>

        );
    }
}

export default App;