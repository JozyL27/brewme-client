import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


export default class NavBar extends React.Component {
    render() {
        return (
            <ul className='navBar'>
                <li className='navLink'>
                    <Link
                    to='/'>
                    Home
                    </Link>
                </li>
                <li className='navLink'>
                    <Link
                    to='/search'
                    >
                    Search
                    </Link>
                </li>
                <li className='navLink'>My Beers</li>
                <li className='navLink'> Random Beer</li>
            </ul>
        )
    }
}