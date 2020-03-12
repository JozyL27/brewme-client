import React from 'react'


export default function Beer(props) {
    console.log(props.brewskis)
    return (
        <>
        {props.brewskis.map(beer => <li key={beer.id}> {beer.name}
            <div>{beer.abv}</div>
            <p>{beer.descript}</p>
        </li>)}
        </>
    )
}