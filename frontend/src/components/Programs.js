import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Programs extends Component{
  render() {
    if(this.props.programs <=0) {
      return <p>Loading ...</p>
    } else {
      console.log('this.props')
      console.log(this.props);
      const tvchannelName = this.props.match.params.tvchannelname;
      
      console.log('tvchanellName:')
      console.log(tvchannelName);

      let programs = this.props.programs;
      console.log('ALL Programs:')
      console.log(programs);

      let tvchannels = this.props.tvchannels;
      console.log('ALL TvChannels:')
      console.log(tvchannels);

      var mezivysledek = tvchannels.filter(tvchannel => (tvchannel.name === tvchannelName));
      console.log("Mezivysledek:");
      console.log(mezivysledek);

      if (mezivysledek.length <= 0) {
        return <p>Loading ......</p>
      } else {
        var tvchannelID=mezivysledek[0]._id
        console.log("tvchannelID:");
        console.log(tvchannelID);
        
        programs = programs.filter (program => ( tvchannelID === program.tvchannel ));
                                    
        return(
            <div>
              <h3>{tvchannelName}</h3>
              <h4>List of programs</h4>
              <ul>
                {programs.map(program => {
                  return(
                      <Link to={`/program/${program._id}`}>
                      <li>{program.title} vysila: "{program.tvchannel.name}" s idckem "{program.tvchannel}"</li>
                      </Link>
                  )
                }
                )
                }
              </ul>
            </div>
        )
      }
    }
  }
}
export default Programs;
