import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Programs extends Component{
  render() {

    const tvchannelName = this.props.match.params.tvchannels;

    let programs = this.props.programs;

    programs = programs.filter (program => (tvchannelName === program.tvchannel.name) );
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
                  <Link to={`/program/${program._id}`}>
                  <li>{program.title}</li>
                  </Link>
              )
            }
            )
            }
          </ul>
        </div>
    )
//    }
  }
}
export default Programs;
