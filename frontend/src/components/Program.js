import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Program extends Component {
    render() {
        const program = this.props.program;
        if (!program) {
            return <p>Waiting for jobs</p>
        }
        return (
            <div>
                <Link to ={"/"}> <p>Home</p></Link>
                <header>
                    <h1>Title : {program.title}</h1>
                    <p>Description: {program.description}</p>
                    <p>First on air: {program.first}</p>
                    <p>Next time in your tv: {program.next}</p>
                    <p>Tv channel that it will be on: {program.tvchannel}</p>
                </header>
            </div>
        )
    }
}

export default Program