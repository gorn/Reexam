import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TvChannels from "./components/TvChannels";
import Programs from "./components/Programs";
import Program from "./components/Program";
import Login from "./components/Login";
import AuthServise from "./components/AuthServise";
import FavoriteList from "./components/FavoriteList";


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            tvchannels: [],
            programs: [],
            users: {}
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

    favoriteStore() {
        let favoritelist = this.state.users;
        localStorage.setItem("favorite", JSON.stringify(favoritelist))
    }

    componentDidMount() {
        //await data.
        this.getPrograms();
        this.getTvChannels();
        this.getFavoriteList();
    }

    async getPrograms () {
        const response = await fetch(
            `https://jobappexam.herokuapp.com/api/programs`
        );
        const json = await response.json();
        this.setState({ programs: json });
        this.programStore();
    }

    getTvChannels () {
        fetch(`https://jobappexam.herokuapp.com/api/tvchannels`)
             .then(response => response.json())
             .then(res => {this.setState({ tvchannels: res.tvchannels }); } );
        this.channelsStore();
    };

    getFavoriteList(){
        fetch (`https://jobappexam.herokuapp.com/api/users/favorite/:id`)
            .then(response => response.json())
            .then(res=>{this.setState({users:res.users})
            });
        this.favoriteStore();
    }

    getProgramId (id)  {
        let programPosition = this.state.programs.find(el => el._id === id);
        return programPosition;
    };
    getUserId(id){
        let userPosition = this.state.users.find(el => el._id ===id);
        return userPosition;
        console.log(userPosition);
    }

    renderUser (props, id) {
        let user = this.getUserId(id);
        return <FavoriteList {...props}
            user={user}
            users={this.state.users}
        />
    }

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

                        <Route exact path={`/programs/:tvchannels`}
                               render={(props) =>
                                   <Programs {...props}
                                                 programs={this.state.programs}
                                                 tvchannel={props.match.params.tvchannel}

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
                        <Route exact path ={`/userSchedule`}
                             render = {(props) =>
                                 this.renderUser(props, props.match.params.id)
                             }
                    />

                    </Switch>
                </Router>
            </div>

        );
    }
}

export default App;