import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Programs extends Component{
  render() {
    let programs = this.props.programs;
    if(programs <= 0){
      return  <p>Loading...</p>
    } else {
      let programFilter = programs.filter(
      program => ( !(program.tvchannel === null) )  &&
             (program.tvchannel.namePath === this.props.tvchannels)
      );
      if(programFilter.length <= 0){
        return <p>Sorry there are no program on this channel</p>
      } else {
        return(
          <div>
            <Link to ={"/"}> <p>Home</p></Link>
            <h1>Programs</h1>
            <h3>List of programs</h3>
            {programFilter.map(el => {
              return <span><Link to={`/program/${el._id}`}>
                     <p>{el.title}</p>
                     </Link>{el.tvchannel === null ? 'tvchannel N/A' : el.tvchannel.name}</span>
            })}      
          </div>
        )
      }
    }
  }
}
export default Programs;
