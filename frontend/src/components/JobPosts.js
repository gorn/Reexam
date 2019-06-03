import React, {Component} from 'react';
import {Link} from "react-router-dom";

class JobPosts extends Component{
    render() {
        return(
            <div>
                <Link to ={"/login"}> <p>Login</p></Link>
                <h1>Job index</h1>
            </div>
        )
    }
}
export default JobPosts;