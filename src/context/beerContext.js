import React from 'react'

const beerContext = React.createContext({
    beers: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBeers: () => {},

})
export default beerContext


export class BeerProvider extends React.Component {
    state = {
        beers: [],
        error: null,
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
        const value = {
            beers: this.state.beers,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBeers: this.setBeers,
        }

        return (
            <beerContext.Provider value={value}>
                {this.props.children}
            </beerContext.Provider>
        )
    }
}