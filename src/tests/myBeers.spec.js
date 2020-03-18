import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MyBeers from '../components/MyBeers/MyBeers'


describe(`MyBeers component`, () => {
    
    it(`MyBeers component renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<MyBeers />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})