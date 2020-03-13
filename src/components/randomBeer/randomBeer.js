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
    console.log(this.context.beers)
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


// parseAuthToken(token) {
//     const base64Url = token.split('.')[1];
//     const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));

//     const payload = JSON.parse(jsonPayload);

//     return {
//       id: payload.user_id,
//       username: payload.sub,
//       role: payload.role
//     }
//   },