import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: null,
            company: null,
            description: null,
            location: null,
            category: null
        }
    }
    render() {
        return(
            <div>
                <h1>Post your jobs</h1>
                <div>
                    <input type="text" placeholder="Title "/>
                    <input type="text" placeholder="Name of your company"/>
                    <input type="text" placeholder="Description of the job"/>
                    <input type="text" placeholder="Location"/>
                    <input type="text" placeholder="category"/>
                </div>
                <button>Submit</button>
            </div>
        )
    }
}
export default Post;