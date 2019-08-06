import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Program extends Component {
    render() {
        const program = this.props.match.params.id;
        console.log(this.props.program.title);
        let programinfo = this.props.program;
        console.log(programinfo);
        console.log(program);
        if (!program) {
            return <p>Waiting for program</p>
        }
        return (
            <div>
                <Link to ={"/"}> <p>Home</p></Link>
                <header>
                    <h1>Title : {this.props.program.title}</h1>
                    <p>Description: {this.props.program.description}</p>
                    <p>First on air: {this.props.program.first}</p>
                    <p>Next time in your tv: {this.props.program.next}</p>
                    <p>Tv channel that it will be on: {this.props.program.tvchannel}</p>
                </header>
            </div>
        )
    }
}

export default Program