import React from 'react'
import TokenService from '../services/token-service'

const beerContext = React.createContext({
    beers: [],
    error: null,
    user_id: null,
    username: null,
    hasAuth: null,
    isLoading: null,
    randBeer: {},
    setError: () => {},
    clearError: () => {},
    setBeers: () => {},
    setRandBeer: () => {},
    clearRandBeer: () => {},
    setUser: () => {},
    clearBeers: () => {},
    setAuth: () => {},
    setLoading: () => {},
    clearLoading: () => {},
    addTouchedKeyToBeers: () => {},
    findBeerByIdAndToggleTouched: () => {},

})

export default beerContext

export class BeerProvider extends React.Component {
    state = {
        beers: [],
        error: null,
        user_id: null,
        username: null,
        hasAuth: TokenService.hasAuthToken(),
        isLoading: null,
        randBeer: {},
    }

    setUser = user => {
        this.setState({ user_id: user.id, username: user.username })
    }

    setBeers = beers => {
        this.setState({ beers })
    }

    setRandBeer = randBeer => {
        this.setState({ randBeer })
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

    clearRandBeer = () => {
        this.setState({ randBeer: {} })
    }

    setAuth = () => {
        this.setState({ hasAuth: TokenService.hasAuthToken })
    }

    setLoading = () => {
        this.setState({ isLoading: true })
    }

    clearLoading = () => {
        this.setState({ isLoading: null })
    }

    addTouchedKeyToBeers = (arr) => {
        arr.map(item => item.touched = false)
    }

    findBeerByIdAndToggleTouched = (id) => {
        const touchedBeer = this.state.beers.find(brew => brew.id === id)
        touchedBeer.touched = true
    }

    render() {
        const value = {
            beers: this.state.beers,
            error: this.state.error,
            user_id: this.state.user_id,
            username: this.state.username,
            isLoading: this.state.isLoading,
            setError: this.setError,
            clearError: this.clearError,
            setBeers: this.setBeers,
            setUser: this.setUser,
            clearBeers: this.clearBeers,
            hasAuth: this.state.hasAuth,
            setAuth: this.setAuth,
            setLoading: this.setLoading,
            clearLoading: this.clearLoading,
            addTouchedKeyToBeers: this.addTouchedKeyToBeers,
            findBeerByIdAndToggleTouched: this.findBeerByIdAndToggleTouched,
            randBeer: this.state.randBeer,
            setRandBeer: this.setRandBeer,
            clearRandBeer: this.clearRandBeer,
        }

        return (
            <beerContext.Provider value={value}>
                {this.props.children}
            </beerContext.Provider>
        )
    }
}