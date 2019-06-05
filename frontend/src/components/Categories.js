import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Categories extends Component{

    // filtering = (list, factor) => {
    //     return list.filter(dat => dat.namePath === factor)
    // };

    render() {

        // let categories = this.props.categories;
        // // let jobs = this.props.jobs;
        // console.log(this.props.categories);
        // if(categories <= 0){
        //     return  <p>Categories loading...</p>
        // }

        return(
            <div>
                <Link to ={"/login"}> <p>Login</p></Link>
                <h1>Categories</h1>

                {this.props.categories.map(dat => {
                    return <Link key={dat._id} to={`/jobs/${dat.namePath}`}><p>{dat.categoryName} <br></br>
                    </p></Link>
                })}
            </div>

        )
            <script>
            window.addEventListener("load", console.log(this))
            </script>
    }
}
export default Categories;