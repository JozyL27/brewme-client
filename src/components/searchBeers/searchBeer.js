import React from 'react'
import SearchBeerService from '../../services/search-beer-service'


export default class SearchBeer extends React.Component {
    state = {
        beers: []
    }

    getBeers = event => {
        event.preventDefault()

        SearchBeerService.getPaginatedBeers(1)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <section className="search">
            <h3>Search Beer Database</h3>
            <form className="searchDatabase" onSubmit={this.getBeers} >
            <input type="text" className="search" name="search" placeholder="Beer Database" />
            <input type="submit" value="Search" />
            </form>
            </section>
        )
    }
}