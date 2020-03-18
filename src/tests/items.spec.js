import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Beer from '../components/searchBeers/items'
import { testInput } from './test-helpers'



describe(`items component`, () => {
    it(`items component renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<Beer userId={5} brewskis={testInput} />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})