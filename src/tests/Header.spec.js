import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Header from '../components/Header/header'


describe(`header component`, () => {

    it(`renders without crashing`, () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
            <Header />
            </BrowserRouter>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it(`renders UI as expected`, () => {
        const tree = renderer
            .create(<BrowserRouter>
            <Header />
            </BrowserRouter>)
            .toJSON()
            expect(tree).toMatchSnapshot()
    })
    
})