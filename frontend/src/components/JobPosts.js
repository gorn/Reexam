import React, {Component} from 'react';
import {Link} from "react-router-dom";

class JobPosts extends Component{
    constructor(){
        super();
        this.state = {
            message: 'Loading'
        }
    }
    componentDidMount() {
        fetch('https://localhost:5000/api/jobs')
            .then(res => res.text())
            .then(res=> this.setState({message: res}))
    }


    render() {
        return(
            <div>
                <Link to ={"/login"}> <p>Login</p></Link>
                <Link to ={"/post"}><p>Post</p></Link>
                <h1>Job index</h1>
                <p>{this.state.message}</p>
            </div>
        )
    }
}
export default JobPosts;