import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Program extends Component {
    render() {
        if(this.props.programs <=0) {
            return <p>Loading ...</p>
          } else {

            console.log('this.props');
            console.log(this.props);

            let programid = this.props.match.params.programid;
            console.log('programid:')
            console.log(programid);
    
            let programs = this.props.programs;
            console.log('ALL Programs:')
            console.log(programs);
            
            let ourProgram = programs.find(prog => prog._id === programid);
            console.log('Our Program:')
            console.log(ourProgram);

            let tvchannels = this.props.tvchannels;
            console.log('ALL TvChannels:')
            console.log(tvchannels);

            let ourChannelID = ourProgram.tvchannel
            console.log('ourChannelID:')
            console.log(ourChannelID);

            let ourChannel = tvchannels.find( channel => channel._id = ourChannelID )
            console.log('ourChannel:')
            console.log(ourChannel);

            let ourChannelName = ourChannel.name;
            console.log('ourChannel:')
            console.log(ourChannel);

            return (
                <div>
                    <Link to ={"/"}> <p>Home</p></Link>
                    <header><h1>Title : {ourProgram.title}</h1>
                        <p>Description: {ourProgram.description}</p>
                        <p>First on air: {ourProgram.first}</p>
                        <p>Next time in your tv: {ourProgram.next}</p>
                        <p>Tv channel that it will be on: {ourChannelName}</p>
                    </header>
                </div>
            )
        }
    }
}

export default Program