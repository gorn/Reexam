import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class FavoriteList extends Component {
    render() {
        const favorite = this.props.users.favorite;
        if (!favorite) {
            return <p>You haven't choose your favorite programs yet</p>
        }
        return (
            <div>
                <Link to ={"/"}> <p>Home</p></Link>
                <header>
                    <h1>Title : {program.title}</h1>
                    <p>Next time in your tv: {program.next}</p>
                    <p>Tv channel that it will be on: {program.tvchannel}</p>
                </header>
            </div>
        )
    }
}

export default FavoriteList