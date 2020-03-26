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
        this.context.setBeers(beers)
    })
    .catch(this.context.setError)
}

addToMyBeers = (user, beer) => {
    this.context.clearError()

    SearchBeerService.addBeer(user, beer)
    .then(res => console.log(res))
    .catch(this.context.setError)
}

componentWillUnmount() {
    this.context.clearBeers()
    this.context.clearError()
    this.context.clearLoading()
}


render() {
    let randBeer = this.context.beers.rows
    return (
        <section className="random">
            {this.context.isLoading ? <div className="loader"></div> : 
            <button onClick={this.getRandom} className="randButton">Get Random Beer!</button> }
            {this.context.error && 
            <div>{this.context.error.error}</div>}
            {this.context.beers.rows && 
            <div key={randBeer[0].id} className="randDiv" aria-live="polite"
            >{randBeer[0].name}
            {SearchBeerService.checkForDescript(randBeer[0].descript)}
            <div className="randAbv">ABV: {Math.round(randBeer[0].abv)}</div>
            <button 
            onClick={() => 
            this.addToMyBeers(this.context.user_id, randBeer[0].id)}
            className="addBeerButton">
            Add to My Beers</button>
            </div>}
        </section>
    )
}
}