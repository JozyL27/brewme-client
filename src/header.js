import React from 'react'
import TokenService from './services/token-service'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <div className='loggedIn'>
                <Link
                onClick={this.handleLogoutClick}
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
                <Link to='/'>
                Brewme.io
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