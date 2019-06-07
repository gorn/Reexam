import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Locations extends Component{

    // filtering = (list, factor) => {
    //     return list.filter(dat => dat.location.namePath === factor)
    // };

    render() {
        console.log(this.props.areas);
        return(
            <div>
                <Link to ={"/login"}> <p>Login</p></Link>

                <h1>Locations</h1>

                {this.props.areas.map(el => {
                    return <Link key={el._id} to={`/jobs/${this.props.category}/${el.namePath}`}><p>{el.name} <br></br>
                    </p></Link>
                })}
            </div>

        )
    }
}
export default Locations;