import config from '../config'
import React from 'react'

const SearchBeerService = {
    getByName(name) {
        return fetch(`${config.API_ENDPOINT}/beers/name/${name}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
            )
    },
    getRandomBeer() {
        return fetch(`${config.API_ENDPOINT}/beers/random/beer`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
            )
    },
    getMyBeers(user) {
        return fetch(`${config.API_ENDPOINT}/userBeers/${user}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
            )
    },
    addBeer(user, beer) {
        return fetch(`${config.API_ENDPOINT}/userBeers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user,
                beer_id: beer,
            }),
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
          )
    },
    checkForDescript(descript) {
        if(descript.length <= 1) {
            return  <p className='noDescript'>No description available.</p>
        } 
    
        return <p className="searchDescript">{descript}</p>
    },
    deleteBeer(user, beer) {
        return fetch(`${config.API_ENDPOINT}/userbeers`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user,
                beer_id: beer
            })
        })
    },
}


export default SearchBeerService