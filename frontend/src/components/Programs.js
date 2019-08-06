import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Programs extends Component{
  render() {
    console.log(this.props);

    const tvchannelName = this.props.match.params.tvchannels;
    console.log("TVCHanel name: " + tvchannelName);

    const programs = this.props.programs;
    console.log("Programs: ");
    console.log(programs);

//    if(programs <=0) {
//      return <p>Loading ...</p>
//    } else {
    return(
        <div>
          <h3>{tvchannelName}</h3>
          <h4>List of programs</h4>
          <ul>
            {programs.map(program => {
              return(
                  <li>
                    {program.title}
                    vysilano na: {program.tvchannel.name}
                    test: { tvchannelName == program.tvchannel.name ? 'chceme' : 'nechceme' }
                  </li>
              )
            })}
          </ul>
        </div>
    )
//    }
  }
}
export default Programs;
