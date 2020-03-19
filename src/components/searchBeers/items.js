import React from 'react'
import SearchBeerService from '../../services/search-beer-service'
import './items.css'

// function generateBrewski(beer, props) {
//     function viewDesc(beer) {
//         beer.expanded = !beer.expanded
//     }

//     if(beer.expanded) {
//         return (
//             <li className="searchLi" key={beer.index}>{beer.name}
//             <div className="searchAbv"> ABV: {beer.abv}</div>
//             {SearchBeerService.checkForDescript(beer.descript)}
//             <button onClick={() => props.addBeer(props.userId, beer.id)}>Add to My Beers</button>
//             </li>
//         )
//     } else {
//         return (
//             <li className="searchLi" key={beer.index}>{beer.name}
//             <div className="searchAbv"> ABV: {beer.abv}</div>
//             <button onClick={() => props.addBeer(props.userId, beer.id)}>Add to My Beers</button>
//             <button onClick={() => viewDesc(beer)}></button>
//             </li> 
//         )
//     }
// }

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

