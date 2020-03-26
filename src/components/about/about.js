import React from 'react'
import './about.css'
import TokenService from '../../services/token-service'
import BeerContext from '../../context/beerContext'

export default class About extends React.Component {
    static contextType = BeerContext

    componentDidMount() {
        this.context.setAuth()
    }

    render() {
    return (
        <section className='about'>
        <h2>About | How To</h2>
        <p className="aboutPara">BrewMe's intended use is to help users save their favorite beers.
        Users are able to add and save their favorite beers to their "My Beers"
        list. Users are also able to search the beer database for beer info and use the
        "Random Beer" feature to retrieve a random beer from the database.
        {' '}
        {TokenService.hasAuthToken() ? null
        : <span className="loginInfo">
        Demo account information will be 
        provided at login.
        </span>}
        </p>
        </section>
    )
    }
}