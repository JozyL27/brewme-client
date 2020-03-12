import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import Beer from './items'




export default class SearchBeer extends React.Component {
    state = {
        beers: [],
        page: 0,
        error: null,
    }

    getByName = event => {
        event.preventDefault()
        this.setState({ error: null })
        let beerName = event.target.search.value
        beerName = beerName.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        encodeURIComponent(beerName)

        SearchBeerService.getByName(beerName)
        .then(res => {
            this.setState({ beers: res })
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        console.log(this.state.beers)
        return (
            <section className="search">
            <h3>Search Beer Database</h3>
            <form className="searchDatabase" onSubmit={this.getByName} >
            <input type="text" className="search" name="search" placeholder="Beer Database" />
            <input type="submit" />
            </form>

            <Beer brewskis={this.state.beers}/>

            {this.state.error && 
            <div>{this.state.error}</div>}
            </section>
        )
    }
}