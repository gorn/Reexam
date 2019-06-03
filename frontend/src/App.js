import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Jobposts from './components/JobPosts';
import Login from './components/Login';
import Post from './components/Post';

class App extends Component{
constructor (props){
        super(props);
        this.state= {jobs: []}
    }

    // async componentWillMount() {
    //     //await data.
    //     const response = await fetch(
    //         `http://localhost:5000/api/jobs`
    //     );
    //     console.log(response);
    //     const json = await response.json();
    //     this.setState({ jobs: json });
    // }

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path = '/' component={Jobposts}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/post' component={Post}/>

                    </Switch>
                </Router>
            </div>

        );
    }


}

export default App;
