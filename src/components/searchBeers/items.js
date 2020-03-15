import React from 'react'
import SearchBeerService from '../../services/search-beer-service'


export default function Beer(props) {
    return (
        <>
        {props.brewskis.map(beer => <li key={beer.id}> {beer.name}
            <div>ABV: {beer.abv}</div>
            {SearchBeerService.checkForDescript(beer.descript)}
            {props.hasAuth ?
            <button onClick={() => props.addBeer(props.userId, beer.id)}>Add to My Beers</button>
            : null}
        </li>)}
        </>
    )
}

