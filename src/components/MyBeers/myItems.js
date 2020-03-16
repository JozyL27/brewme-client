import React from 'react'
import SearchBeerService from '../../services/search-beer-service'



export default function MyItems(props) {
    return (
        <>
        {props.brewskis.map((beer, index) => <li key={index}> {beer.name}
            <div>ABV: {beer.abv}</div>
            {SearchBeerService.checkForDescript(beer.descript)}
        </li>)}
        </>
    )
}