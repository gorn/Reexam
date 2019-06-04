import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import JobPosts from './components/JobPosts';
import Login from './components/Login';
import Post from './components/Post';


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            jobs: [],
            areas: []
        };

        this.postDataToDB = this.postDataToDB.bind(this);
    }

    componentDidMount() {
        //await data.
        this.getJobs()
        this.getLocation()
    }

    async getJobs () {
        const response = await fetch(
            `http://localhost:5000/api/jobs`
        );
        const json = await response.json();
        this.setState({ jobs: json });
    }

    async getLocation (){
        const response = await fetch(`http://localhost:5000/api/jobs/locations`);
        console.log(response)
        // const json = await response.json();
        // this.setState({areas:json})


        }

    postDataToDB(title, company, description, location, category){
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
        var jobs = this.state.jobs;
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path = '/'
                               render={(props)=>
                                   <JobPosts {...props}
                                        jobs={jobs}
                                   />
                               }
                            />
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/post' component={Post}/>
                        <Route exact path={'/post'}
                               render={(props) =>
                                   <Post {...props}
                                                 header={'Post job add'} postDataToDB={this.postDataToDB} form={this.postDataToDB}/>
                               }
                        />

                    </Switch>
                </Router>
            </div>

        );
    }


}

export default App;
