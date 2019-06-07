import React, { Component } from 'react'
import formObject from './objects';
import {Link} from "react-router-dom";

export class Post extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const job = formObject.object(e);

        this.props.postJob(
            job.title,
            job.category,
            job.description,
            job.location,
            job.company,
    )
    };

    renderList (list) {
        return list.map(el => (
            <option key={el._id} value={el._id}>{el.name}</option>
        ))
    };

    render() {
        let categories = this.props.categories;
        let areas = this.props.areas;

        console.log(this.props);

        if(!categories || !areas){
            return <p>Loading...</p>
        }

        return (
            <div>
                <Link to ={"/"}> <p>Home</p></Link><br></br>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Add a title" required/><br></br>
                    <input type="text" name="company" placeholder="Add a company" required/><br></br>
                    <textarea type="text" name="description" placeholder="Add a description" required/><br></br>
                    <select name="location" required>
                        {this.renderList(areas)}
                    </select>
                    <select name="category" required>
                        {this.renderList(categories)}
                    </select>
                    <button type="submit">Add a job post</button>
                </form>
            </div>
        )
    }
}

export default Post