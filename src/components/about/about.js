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
        <p className="aboutPara">BrewMe is a beer database containing over 4,500 beer entries. API documentation
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