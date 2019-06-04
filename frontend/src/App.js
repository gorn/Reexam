import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Jobposts from './components/JobPosts';
import Login from './components/Login';
import Post from './components/Post';


class App extends Component{
    constructor(props) {
        super(props);

        this.state = { jobs: [] };

        this.postDataToDB = this.postDataToDB.bind(this);
    }

    async componentWillMount() {
        //await data.
        const response = await fetch(
            `/api/questions`
        );
        const json = await response.json();
        this.setState({ questions: json });
    }

    postDataToDB(title, description){
        fetch(`http://localhost:5000/api/jobs/post`, {
            method:'post',
            body: JSON.stringify({
                "title": title,
                "company": company,
                "description": description,
                "location": location,
                "category": category
            }),
            headers: new Headers({ "Content-Type": "application/json" }) // add headers

        })
    }

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
