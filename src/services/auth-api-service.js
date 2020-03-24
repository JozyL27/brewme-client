import config from '../config'


const AuthApiService = {
    postLogin(credentials) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
            )
    },
    // endpoint below will be used for registration component
    // in a future update
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
            )
    },
}

export default AuthApiService