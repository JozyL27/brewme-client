import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import BeerContext from '../../context/beerContext'
import TokenService from '../../services/token-service'
import MyItems from './myItems'

export default class MyBeers extends React.Component {
    static contextType = BeerContext

    componentDidMount() {
        this.context.clearError()
        this.context.setLoading()

        if(TokenService.hasAuthToken()) {
        let user = TokenService.getAuthToken()
        let parsedUser = TokenService.parseAuthToken(user)
        this.context.setUser(parsedUser)

        SearchBeerService.getMyBeers(parsedUser.id)
        .then(beers => {
            this.context.clearLoading()
            this.context.setBeers(beers)
        })
        .catch(this.context.setError)
        }
    }

    deleteUserBeer = (user, beer) => {
        this.context.clearError()

        SearchBeerService.deleteBeer(user, beer)
        .then(() => {
            let user = TokenService.getAuthToken()
            let parsedUser = TokenService.parseAuthToken(user)
            SearchBeerService.getMyBeers(parsedUser.id)
            .then(this.context.setBeers)
            .catch(this.context.setError)
        })
        .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearBeers()
        this.context.clearError()
        this.context.clearLoading()
    }

    render() {
        return (
            <>

            {this.context.error && 
            <div className="myBeersError">{this.context.error.error}</div>}

            {this.context.beers.length < 1 && this.context.isLoading === null ?
            <p className="noBeersPara">There are currently no beers in your list!</p>
            : null}

            {this.context.isLoading ? <div className="loader"></div> :
            <ul className="myUl" aria-live="polite">
            {this.context.beers.length >= 1 &&
            <MyItems brewskis={this.context.beers} 
            deleteBrewski={this.deleteUserBeer}/>}
            </ul>
            }
            
            </>
        )
    }
}