import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NavBar from '../components/NavBar/NavBar'


describe(`NavBar component`, () => {
    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<NavBar />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})