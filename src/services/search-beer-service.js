import config from '../config'


const SearchBeerService = {
    getPaginatedBeers(pageNum) {
        return fetch(`${config.API_ENDPOINT}/beers/${pageNum}`, {
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
}


export default SearchBeerService