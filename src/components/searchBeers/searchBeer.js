import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import Beer from './items'
import BeerContext from '../../context/beerContext'
import TokenService from '../../services/token-service'
import './searchBeer.css'




export default class SearchBeer extends React.Component {
    static contextType = BeerContext

    componentDidMount() {
        this.context.clearError()

        if(TokenService.hasAuthToken()) {
        let user = TokenService.getAuthToken()
        let parsedUser = TokenService.parseAuthToken(user)
        this.context.setUser(parsedUser)
        }
    }

    getByName = event => {
        event.preventDefault()
        this.context.clearError()
        let beerName = event.target.search.value
        beerName = beerName.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        encodeURIComponent(beerName)

        SearchBeerService.getByName(beerName)
        .then(this.context.setBeers)
        .catch(this.context.setError)
    }

    addToMyBeers = (user, beer) => {
        this.context.clearError()
    
        SearchBeerService.addBeer(user, beer)
        .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearBeers()
        this.context.clearError()
    }

    render() {
        return (
            <section className="search">
            <h3 className="searchHeader">Search Beer Database</h3>
            {this.context.error && 
            <div>{this.context.error.error}</div>}
            <form className="searchDatabase" onSubmit={this.getByName} >
            <input type="text" className="search" name="search" placeholder="Beer Database" />
            <input type="submit" />
            </form>
            
            <ul className="searchUl">
            {this.context.beers.length >= 1 &&
            <Beer brewskis={this.context.beers} addBeer={this.addToMyBeers}
            userId={this.context.user_id} hasAuth={this.context.hasAuth}
            beerError={this.context.error} />}
            </ul>
            </section>
        )
    }
}