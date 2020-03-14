import React from 'react'



export default function MyItems(props) {
    return (
        <>
        {props.brewskis.map(beer => <li key={beer.beer_id}> {beer.name}
            <div>{beer.abv}</div>
            <p>{beer.descript}</p>
        </li>)}
        </>
    )
}