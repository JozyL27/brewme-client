import React from 'react'


export default function Beer(props) {
    return (
        <>
        {props.brewskis.map(beer => <li key={beer.id}> {beer.name}
            <div>{beer.abv}</div>
            <p>{beer.descript}</p>
        </li>)}
        </>
    )
}

