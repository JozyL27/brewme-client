import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import BeerContext from '../../context/beerContext'

export default class MyBeers extends React.Component {
    static contextType = BeerContext

    render() {
        return (
            <>
            <div>im beers!</div>
            </>
        )
    }
}