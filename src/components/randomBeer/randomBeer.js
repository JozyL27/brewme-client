import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import BeerContext from '../../context/beerContext'
import TokenService from '../../services/token-service'
import './randomBeer.css'

export default class RandomBeer extends React.Component {
static contextType = BeerContext

componentDidMount() {
    this.context.clearError()
    this.context.clearLoading()

    if(TokenService.hasAuthToken()) {
    let user = TokenService.getAuthToken()
    let parsedUser = TokenService.parseAuthToken(user)
    this.context.setUser(parsedUser)
    }
}

getRandom = event => {
    event.preventDefault()
    this.context.clearError()
    this.context.setLoading()

    SearchBeerService.getRandomBeer()
    .then(beers => {
        this.context.clearLoading()
        beers.touched = false
        this.context.setRandBeer(beers)
    })
    .catch(this.context.setError)
}

addToMyBeers = (user, beer) => {
    this.context.clearError()
    beer.touched = true

    SearchBeerService.addBeer(user, beer.id)
    .catch(this.context.setError)
}

componentWillUnmount() {
    this.context.clearRandBeer()
    this.context.clearError()
    this.context.clearLoading()
}


render() {
    let randBeer = this.context.randBeer || {}
    return (
        <section className="random">
            {this.context.isLoading ? <div className="loader"></div> : 
            <button onClick={this.getRandom} className="randButton">Get Random Beer!</button> }
            {this.context.error && 
            <div className="error">{this.context.error.error}</div>}
            
            {this.context.randBeer.id && 
            <div key={randBeer.id} className="randDiv" aria-live="polite"
            >{randBeer.name}
            {randBeer.descript ? 
            <p className="searchDescript">{randBeer.descript}</p> : 
            <p className='noDescript'>No description available.</p>}
            <div className="randAbv">ABV: {Math.round(randBeer.abv)}</div>
            {randBeer.touched === true ? 
            <p className="beerAdded">Added To My Beers!</p> :
            <button 
            onClick={() => 
            this.addToMyBeers(this.context.user_id, randBeer)}
            className="addBeerButton">
            Add to My Beers</button>}
            </div>}
        </section>
    )
}
}