import React from 'react'

const beerContext = React.createContext({
    beers: [],
    error: null,
    user_id: null,
    username: null,
    setError: () => {},
    clearError: () => {},
    setBeers: () => {},
    setUser: () => {},

})
export default beerContext


export class BeerProvider extends React.Component {
    state = {
        beers: [],
        error: null,
        user_id: null,
        username: null,
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


    render() {
        console.log(this.state)
        const value = {
            beers: this.state.beers,
            error: this.state.error,
            user_id: this.state.user_id,
            username: this.state.username,
            setError: this.setError,
            clearError: this.clearError,
            setBeers: this.setBeers,
            setUser: this.setUser,
        }

        return (
            <beerContext.Provider value={value}>
                {this.props.children}
            </beerContext.Provider>
        )
    }
}