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
        <p className="aboutPara">BrewMe is a database containing almost 5,000 beer entries.
        Developers are able to use this  RESTful API to add and save their favorite beers to their "My Beers"
        list. Developers are also able to search the beer database for beer info and use the
        "Random Beer" feature to retrieve a random beer from the database. This API has authentication 
        but is not required to search and / or retrieve a random beer from the database. API documentation
        can be found <a href='https://github.com/JozyL27/brewme-server' className='server'> here</a>. You can demo the
        API using this basic React App.
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