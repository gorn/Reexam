import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Program extends Component {
    render() {


        console.log(this.props);
        return(
            <div>
                <h1>Your movie schedule:</h1>
            </div>
        )

    }
}

export default Program