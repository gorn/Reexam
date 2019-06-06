import React, {Component} from 'react';
import {Link} from "react-router-dom";

class JobPosts extends Component{
    render() {

        let jobs = this.props.jobs;

        if(jobs.length <= 0){
            return <p>Sorry there are no jobs</p>
        }

        return(
            <div>
                <Link to ={"/"}> <p>Home</p></Link>
                <h1>Jobs</h1>
                <h3>Job list</h3>
                {jobs.map(dat => {
                    return <Link to={`/job/${dat._id}`}>
                        <p>{dat.title}</p>
                    </Link>
                })}
            </div>
        )
    }
}
export default JobPosts;