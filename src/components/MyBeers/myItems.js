import React from 'react'



export default function MyItems(props) {
    function checkForDescript(descript) {
        if(descript.length <= 1) {
            return  <img src="https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/16517/21038/71882-1024__10025.1516616292.jpg?c=2?imbypass=on" alt="bookimg" />
        } 
    
        return <p>{descript}</p>
    }

    return (
        <>
        {props.brewskis.map(beer => <li key={beer.beer_id}> {beer.name}
            <div>{beer.abv}</div>
            <p>{beer.descript}</p>
        </li>)}
        </>
    )
}