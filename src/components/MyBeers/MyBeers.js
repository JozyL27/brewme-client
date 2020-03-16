import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import BeerContext from '../../context/beerContext'
import TokenService from '../../services/token-service'
import MyItems from './myItems'

export default class MyBeers extends React.Component {
    static contextType = BeerContext

    componentDidMount() {
        if(TokenService.hasAuthToken()) {
        let user = TokenService.getAuthToken()
        let parsedUser = TokenService.parseAuthToken(user)
        this.context.setUser(parsedUser)

        SearchBeerService.getMyBeers(parsedUser.id)
        .then(this.context.setBeers)
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
    }

    render() {
        return (
            <>
            {this.context.beers.length < 1 &&
            <p>There are currently no beers in your list!</p>}

            {this.context.beers.length >= 1 &&
            <MyItems brewskis={this.context.beers} 
            deleteBrewski={this.deleteUserBeer}/>}

            {this.context.error && 
            <div>{this.context.error}</div>}
            </>
        )
    }
}