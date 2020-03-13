import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import Beer from './items'
import BeerContext from '../../context/beerContext'





export default class SearchBeer extends React.Component {
    static contextType = BeerContext

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

    render() {
        return (
            <section className="search">
            <h3>Search Beer Database</h3>
            <form className="searchDatabase" onSubmit={this.getByName} >
            <input type="text" className="search" name="search" placeholder="Beer Database" />
            <input type="submit" />
            </form>

            <Beer brewskis={this.context.beers}/>

            {this.context.error && 
            <div>{this.context.error}</div>}
            </section>
        )
    }
}