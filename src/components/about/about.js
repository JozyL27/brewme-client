import React from 'react'
import './about.css'

export default class About extends React.Component {
    render() {
    return (
        <section className='about'>
        <h3>About | How To</h3>
        <p>BrewMe.io's intended use is to help users save their favorite beers.
        Users are able to add and save their favorite beers to their "My Beers"
        list, as well as search the beer database for beer info, and use the
        "Random Beer" function to retrieve a random beer from the database.</p>
        </section>
    )
    }
}