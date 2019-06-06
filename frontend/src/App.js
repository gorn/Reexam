import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Post from './components/Post';
import Categories from "./components/Categories";
import Locations from "./components/Locations";
import JobPosts from "./components/JobPosts";
import Job from "./components/Job";
import Login from "./components/Login";


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            jobs: [],
            locations: []
        };
    }

    keepCategories(){
        let categories = this.state.categories;
        localStorage.setItem("categories", JSON.stringify(categories))
    };

    keepJobs(){
        let jobs = this.state.jobs;
        localStorage.setItem("jobs", JSON.stringify(jobs))
    };

    keepLocations(){
        let locations = this.state.locations;
        localStorage.setItem("locations", JSON.stringify(locations))
    };

    componentDidMount() {
        //await data.
        this.getJobs();
        this.getCategories();
        this.getLocations();
    }

    async getJobs () {
        const response = await fetch(
            `http://localhost:5000/api/jobs`
        );
        const json = await response.json();
        this.setState({ jobs: json });
        this.keepJobs();
    }

    getCategories () {
        fetch("http://localhost:5000/api/categories")
             .then(response => response.json())
             .then(res => {this.setState({ categories: res.categories }); } );
        this.keepCategories();
    };
    getLocations = () => {
        fetch("http://localhost:5000/api/locations")
            .then(locations => locations.json())
            .then(res => this.setState({ locations: res.data }));
        this.keepLocations()
    };

    getJobId (id)  {
        let jobPosition = this.state.jobs.find(el => el._id === id);
        return jobPosition;
    };

    renderJob = (props, id) => {
        let job = this.getJobId(id);
        return <Job {...props}
                    job={job}
                    jobs={this.state.jobs}
        />
    };

    makeJob (title, category, location, description)  {
        fetch(`http://localhost:5000/api/jobs/albi/post`, {
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                category: category,
                location: location,
                description: description
            })
        })
            .then(json => {
                console.log(json);
                this.getJobs();
            })
    };

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path={'/'}
                               render={(props) =>
                                   <div>
                                       <Categories {...props} jobs={this.state.jobs}
                                                       categories={this.state.categories}/>
                                   </div>
                               }
                        />
                        <Route exact path={'/jobs/:category'}
                               render={(props) =>
                                   <Locations {...props}
                                                 jobs={this.state.jobs}
                                                 category={props.match.params.category}
                                                 locations={this.state.locations}/>
                               }
                        />

                        <Route exact path={'/jobs/'}
                               render={(props) =>
                                   <Categories {...props}
                                         jobs={this.state.jobs}
                                         category={props.match.params.category}
                                         areas={this.state.areas}
                                   />
                               }
                        />

                        <Route exact path={'/jobs/:category/:location'}
                               render={(props) =>
                                   <JobPosts {...props}
                                                 jobs={this.state.jobs}
                                                 category={props.match.params.category}
                                                 location={props.match.params.location}
                                   />
                               }
                        />
                        <Route exact path={'/job/:id'}
                               render={(props) =>
                                   this.renderJob(props, props.match.params.id)
                               }
                        />
                        <Route exact path='/post' component={Post}/>
                        <Route exact path={'/login'}
                               render={(props) =>
                                   <div>
                                       <Login {...props}/>
                                   </div>
                               }
                        />
                        {/*<Route exact path={'/post'}*/}
                               {/*render={(props) =>*/}
                                   {/*<Post {...props}*/}
                                         {/*header={'Post job add'} postDataToDB={this.postDataToDB} form={this.postDataToDB}/>*/}
                               {/*}*/}
                        {/*/>*/}

                    </Switch>
                </Router>
            </div>

        );
    }
}

export default App;