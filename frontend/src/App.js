import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Post from './components/Post';
import Categories from "./components/Categories";
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
            categories: [],
            jobs: [],
            areas: []
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
        let locations = this.state.areas;
        localStorage.setItem("areas", JSON.stringify(locations))
    };

    componentDidMount() {
        //await data.
        this.getJobs();
        this.getCategories();
        this.getLocations();
    }

    async getJobs () {
        const response = await fetch(
            `/jobs`
        );
        const json = await response.json();
        this.setState({ jobs: json });
        this.keepJobs();
    }

    getCategories () {
        fetch("/categories")
             .then(response => response.json())
             .then(res => {this.setState({ categories: res.categories }); } );
        this.keepCategories();
    };
    getLocations = () => {
        fetch("/locations")
            .then(locations => locations.json())
            .then(res => this.setState({ areas: res.data }));
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

    postJob (title,company, category, area, description)  {
        fetch(`/jobs/albi/post`, {
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                company: company,
                category: category,
                area: area,
                description: description
            })
        })
            .then(json => {
                console.log(json);

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
                                                 areas={this.state.areas}/>
                               }
                        />

                        <Route exact path={'/jobs/'}
                               render={(props) =>
                                   <Categories {...props}
                                         jobs={this.state.jobs}
                                         category={props.match.params.category}
                                         area={this.state.area}
                                   />
                               }
                        />

                        <Route exact path={'/jobs/:category/:area'}
                               render={(props) =>
                                   <JobPosts {...props}
                                                 jobs={this.state.jobs}
                                                 category={props.match.params.category}
                                                 area={props.match.params.area}
                                   />
                               }
                        />
                        <Route exact path={'/job/:id'}
                               render={(props) =>
                                   this.renderJob(props, props.match.params.id)
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
                        <Route exact path={'/post'}
                               render={(props) =>
                                   <Post {...props}
                                         postJob={this.postJob}
                                         categories={this.state.categories}
                                         areas={this.state.areas}
                                   />
                               }
                        />

                    </Switch>
                </Router>
            </div>

        );
    }
}

export default App;