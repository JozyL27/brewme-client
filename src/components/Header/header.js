import React from 'react'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'
import './header.css'
import BeerContext from '../../context/beerContext'

export default class Header extends React.Component {
    static contextType = BeerContext

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.context.setAuth()
    }

    renderLogoutLink() {
        return (
            <div className='loggedIn'>
                <Link
                onClick={this.handleLogoutClick}
                className="inLink"
                to='/'>
                Logout
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='renderLogin'>
                <Link
                className="outLink"
                to='/login'>
                Login
                </Link>
            </div>
        )
    }

    render() {
    return (
        <>
        <nav>
            <h1>
                <Link to='/' className="brewHeader">
                BrewMe
                </Link>
            </h1>
            {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
        </>
    )
    }
}