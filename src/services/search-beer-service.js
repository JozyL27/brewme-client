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
    getByName(name) {
        encodeString(name)
        return fetch(`${config.API_ENDPOINT}/beers/${name}`, {
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

function encodeString(string) {
    let name = `${string}`;
    name = name.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    return encodeURIComponent(name)
}


export default SearchBeerService