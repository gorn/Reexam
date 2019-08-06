import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Program extends Component {
    render() {
        const program = this.props.match.params.id;
        let programinfo = this.props.program;
        console.log(programinfo);
        console.log(props);

        console.log(program);
        if (!program) {
            return <p>Waiting for program</p>

        }
        return (
            <div>
                <Link to ={"/"}> <p>Home</p></Link>
                <header>
                    <h1>Title : {programinfo.title}</h1>
                    <p>Description: {programinfo.description}</p>
                    <p>First on air: {programinfo.first}</p>
                    <p>Next time in your tv: {programinfo.next}</p>
                    <p>Tv channel that it will be on: {programinfo.tvchannel}</p>
                </header>
            </div>
        )
    }
}

export default Program