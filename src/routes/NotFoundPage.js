import React from 'react'
import './NotFoundPage.css'


export default class NotFoundPage extends React.Component {
    render() {
        return (
            <section className="notFound">
                <h2 className="notFoundHeader">404 - Page not found bro</h2>
                <p className="notFoundPara">Try going back to your previous page dude</p>
            </section>
        )
    }
}