import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


export default class NavBar extends React.Component {
    render() {
        return (
            <ul className='navBar'>
                <li className='navLink'>
                    <Link
                    to='/'
                    className="navBarLink active">
                    Home
                    </Link>
                </li>
                <li className='navLink'>
                    <Link
                    to='/search'
                    className="navBarLink"
                    >
                    Search
                    </Link>
                </li>
                <li className='navLink'>
                    <Link
                    to='/myBeers'
                    className="navBarLink"
                    >
                    My Beers
                    </Link>
                </li>
                <li className='navLink'>
                    <Link
                    to='/random'
                    className="navBarLink"
                    >
                    Random Beer
                    </Link>
                </li>
            </ul>
        )
    }
}