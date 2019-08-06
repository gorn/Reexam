import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Programs extends Component{
  render() {
    console.log(this.props);

    const tvchannel = this.props.match.params.tvchannels;
    console.log("TVCHanel: "+tvchannel);

    const programs = this.props.programs;
    console.log("Programs: ");
    console.log(programs);
    return(

    <div>
      <h3>{tvchannel}</h3>
      <h4>List of programs</h4>
      <ul>
        {programs.map(el => {
          return(
              <li>{el.title} - {el.tvchannel.name}</li>
          )
        })}

        </ul>
    </div>
    )
    // let programs = this.props.programs;
    // console.log("Programs: " + programs);
    // console.log("všechny programy, které by měli pasovat k stanici"+this.props.match.params.tvchannel);
    // if(programs <= 0){
    //   return  <p>Loading...</p>
    // } else {
    //   console.log(programs);
    //   let programFilter = programs.filter(
    //   program => ( !(program.tvchannel === null) )  &&
    //          (program.tvchannel.namePath === this.props.tvchannels)
    //   );
    //   if(programFilter.length <= 0){
    //     return <p>Sorry there are no program on this channel</p>
    //   } else {
    //     return(
    //       <div>
    //         <Link to ={"/"}> <p>Home</p></Link>
    //         <h1>Programs</h1>
    //         <h3>List of programs</h3>
    //         {programFilter.map(el => {
    //           return <span><Link to={`/program/${el._id}`}>
    //                  <p>{el.title}</p>
    //                  </Link>{el.tvchannel === null ? 'tvchannel N/A' : el.tvchannel.name}</span>
    //         })}
    //       </div>
    //     )
    //   }
    // }
        }
}
export default Programs;
