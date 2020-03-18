import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'
import MyItems from '../components/MyBeers/myItems';
import renderer from 'react-test-renderer'
import { testInputTwo } from './test-helpers'


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
        ReactDOM.render(<MyItems brewskis={testInputTwo}/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it(`renders the  UI as expected`, () => {
        const tree = renderer
            .create(<MyItems brewskis={testInputTwo}/>)
            .toJSON()
            expect(tree).toMatchSnapshot()
    })
})