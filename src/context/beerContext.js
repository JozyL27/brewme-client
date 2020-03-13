import React from 'react'
import TokenService from '../services/token-service'

const beerContext = React.createContext({
    beers: [],
    error: null,
    user_id: null,
    username: null,
    hasAuth: null,
    setError: () => {},
    clearError: () => {},
    setBeers: () => {},
    setUser: () => {},
    clearBeers: () => {},
    setAuth: () => {},

})
export default beerContext


export class BeerProvider extends React.Component {
    state = {
        beers: [],
        error: null,
        user_id: null,
        username: null,
        hasAuth: TokenService.hasAuthToken(),
    }

    setUser = user => {
        this.setState({ user_id: user.id, username: user.username })
    }

    setBeers = beers => {
        this.setState({ beers })
    }

    setError = error => {
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    clearBeers = () => {
        this.setState({ beers: [] })
    }

    setAuth = () => {
        this.setState({ hasAuth: TokenService.hasAuthToken })
    }

    render() {
        const value = {
            beers: this.state.beers,
            error: this.state.error,
            user_id: this.state.user_id,
            username: this.state.username,
            setError: this.setError,
            clearError: this.clearError,
            setBeers: this.setBeers,
            setUser: this.setUser,
            clearBeers: this.clearBeers,
            hasAuth: this.state.hasAuth,
            setAuth: this.setAuth,
        }

        return (
            <beerContext.Provider value={value}>
                {this.props.children}
            </beerContext.Provider>
        )
    }
}