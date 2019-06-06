import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Job extends Component {
    render() {
        const job = this.props.job;
        if (!job) {
            return <p>Waiting for jobs</p>
        }
        return (
            <div>
                <Link to ={"/"}> <p>Home</p></Link>
                <header>
                    <h1>Title : {job.title}</h1>
                    <h3>Company : {job.company}</h3>
                    <p>Description: {job.description}</p>
                </header>
            </div>
        )
    }
}

export default Job