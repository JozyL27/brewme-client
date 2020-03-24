import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import './items.css'

export default function Beer(props) {
    return (
        <>
            {props.brewskis.map((beer, index) =>
            <li key={index} className="searchLi"> {beer.name}
            <div className="searchAbv">ABV: {Math.round(beer.abv)}</div>
            {SearchBeerService.checkForDescript(beer.descript)}
            <button onClick={() => props.addBeer(props.userId, beer.id)} 
            className="addBeerButton">Add to My Beers</button>
            </li>)}
        </>
    )
}

