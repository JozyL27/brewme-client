import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import BeerContext from '../../context/beerContext'

export default class RandomBeer extends React.Component {
static contextType = BeerContext

getRandom = event => {
    event.preventDefault()
    this.context.clearError()

    SearchBeerService.getRandomBeer()
    .then(this.context.setBeers)
    .catch(this.context.setError)
}

render() {
    let randBeer = this.context.beers.rows
    return (
        <section className="random">
            <button onClick={this.getRandom}>Get Random Beer!</button>
            {this.context.beers.rows && 
            <div>{randBeer[0].name}
            <p>{randBeer[0].descript}</p>
            <div>ABV: {randBeer[0].abv}</div>
            </div>}
        </section>
    )
}
}