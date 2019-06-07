import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class LoginSuccess extends Component {

    render() {
        return (
            <div>
                <Link to={`/post/`}>For posting companies click here</Link><br></br>
                <Link to ={"/"}> <p>Home</p></Link>
            </div>
        );
    }
}

export default LoginSuccess;