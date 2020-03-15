import React from 'react'
import SearchBeerService from '../../services/search-beer-service'


export default function Beer(props) {
    return (
        <>
        {props.brewskis.map(beer => <li key={beer.id}> {beer.name}
            <div>ABV: {beer.abv}</div>
            {SearchBeerService.checkForDescript(beer.descript)}
        </li>)}
        </>
    )
}

//if user_id is !null show button

