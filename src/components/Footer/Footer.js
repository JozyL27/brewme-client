import React from 'react'
import './Footer.css'


export default class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <div className="scene">
                    <div className="box is-spinning">
                        <div className="box__face box__face--front">"BREWME"</div>
                        <div className="box__face box__face--back">Alba</div>
                        <div className="box__face box__face--right">By</div>
                        <div className="box__face box__face--left">Jozy</div>
                        <div className="box__face box__face--top">Jozy A.</div>
                        <div className="box__face box__face--bottom">03 - 2020</div>
                    </div>
                </div>
            </footer>
        )
    }
}