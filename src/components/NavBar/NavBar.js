import React from 'react'
import { Link } from 'react-router-dom'


export default class NavBar extends React.Component {
    render() {
        return (
            <ul>
                <li>
                <Link
                to='/'>
                Home
                </Link>
                </li>
                <li>Search</li>
                <li>My Beers</li>
                <li> Random Beer</li>
            </ul>
        )
    }
}