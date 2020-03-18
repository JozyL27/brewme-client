import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'
import MyItems from '../components/MyBeers/myItems';


describe(`MyItems component`, () => {
    it(`My App renders without crashing`, () => {
        const div = document.createElement('div')

        ReactDOM.render(
        <BrowserRouter>
        <App />
        </BrowserRouter>,
        div)


        ReactDOM.unmountComponentAtNode(div)
    })

    it(`My List Component renders without crashing`, () => {
        const div = document.createElement('div')
        const input = [{
            name: 'beer one',
            abv: 4,
            descript: 'im a beer',
            user_id: 2,
            beer_id: 1
        },
        {
            name: 'beer two',
            abv: 5,
            descript: 'im a beer too',
            user_id: 3,
            beer_id: 2
        }
        ]
        ReactDOM.render(<MyItems brewskis={input}/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})