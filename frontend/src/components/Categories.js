import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Categories extends Component{

        render() {
        return(
            <div>
                <Link to ={"/login"}> <p>Login</p></Link>
                <h1>Categories</h1>

                {this.props.categories.map(el => {
                    return <Link key={el._id} to={`/jobs/${el.namePath}`}><p>{el.name} <br></br>
                    </p></Link>
                })}
            </div>

        )
    }
}
export default Categories;