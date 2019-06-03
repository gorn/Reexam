import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Login extends Component{
    render() {
        return(
            <div>
                <h1>Login for posting jobs</h1>
                <div>
                    <input type="name" placeholder="Username "/>
                    <input type="password" placeholder="password "/>
                </div>
                <button>Submit</button>
            </div>
        )
    }
}
export default Login;

