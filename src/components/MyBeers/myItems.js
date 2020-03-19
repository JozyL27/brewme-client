import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import './myItems.css'



export default function MyItems(props) {
    return (
        <>
        {props.brewskis.map((beer, index) => <li key={index} className="myLi"> {beer.name}
        <div className="myAbv">ABV: {Math.round(beer.abv)}</div>
        {SearchBeerService.checkForDescript(beer.descript)}
        <button onClick={() => props.deleteBrewski(beer.user_id, beer.beer_id)} 
        className="deleteButton">Delete</button>
        </li>)}
        </>
    )
}