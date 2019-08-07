import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Program extends Component {
    render() {
        const favorite = this.props.users.favorite;

        console.log(this.props);
        console.log(favorite);
        if (!favorite) {
            return <p>You don't have any favorite programs yet</p>
        }
        return (
            <div>
                <Link to ={"/"}> <p>Home</p></Link>
                <header>
                    <h1>Title : {favorite.title}</h1>
                    <p>Next time in your tv: {favorite.next}</p>
                    <p>Tv channel that it will be on: {favorite.tvchannel}</p>
                </header>
            </div>
        )
    }
}

export default Program