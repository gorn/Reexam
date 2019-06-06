import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Locations extends Component{

    // filtering = (list, factor) => {
    //     return list.filter(dat => dat.location.namePath === factor)
    // };

    render() {

        let locations = this.props.locations;

        return(
            <div>
                <Link to ={"/login"}> <p>Login</p></Link>
                <h1>Locations</h1>

                {this.props.locations.map(el => {
                    return <Link key={el._id} to={`/jobs/${this.props.category}/${el.namePath}`}><p>{el.name} <br></br>
                    </p></Link>
                })}
            </div>

        )
    }
}
export default Locations;