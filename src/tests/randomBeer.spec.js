import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import RandomBeer from '../components/randomBeer/randomBeer'


describe(`random beer component`, () => {
    it(`random beer component renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(<RandomBeer />, div)
        ReactDOM.unmountComponentAtNode(div)
    })


    it(`renders the UI as expected`, () => {
        const tree = renderer
            .create(<RandomBeer />)
            .toJSON()
            expect(tree).toMatchSnapshot()
    })
})