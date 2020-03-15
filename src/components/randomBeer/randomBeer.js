import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import BeerContext from '../../context/beerContext'
import TokenService from '../../services/token-service'

export default class RandomBeer extends React.Component {
static contextType = BeerContext

componentDidMount() {
    if(TokenService.hasAuthToken()) {
    let user = TokenService.getAuthToken()
    let parsedUser = TokenService.parseAuthToken(user)
    this.context.setUser(parsedUser)
    }
}

getRandom = event => {
    event.preventDefault()
    this.context.clearError()

    SearchBeerService.getRandomBeer()
    .then(this.context.setBeers)
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
}


render() {
    let randBeer = this.context.beers.rows
    return (
        <section className="random">
            <button onClick={this.getRandom}>Get Random Beer!</button>
            {this.context.beers.rows && 
            <div key={randBeer[0].id}>{randBeer[0].name}
            {SearchBeerService.checkForDescript(randBeer[0].descript)}
            <div>ABV: {randBeer[0].abv}</div>
            {this.context.hasAuth === true &&
            <button onClick={() => this.addToMyBeers(this.context.user_id, randBeer[0].id)}>Add to My Beers</button>}
            </div>}
        </section>
    )
}
}