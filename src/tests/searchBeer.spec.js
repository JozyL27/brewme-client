import React from 'react'
import ReactDOM, { render } from 'react-dom'
import renderer from 'react-test-renderer'
import SearchBeer from '../components/searchBeers/searchBeer'


describe(`search beer component`, () => {

    it(`search beer component renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<SearchBeer />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it(`renders the UI as expected`, () => {
        const tree = renderer
            .create(<SearchBeer />)
            .toJSON()
            expect(tree).toMatchSnapshot()
    })
})