import React from 'react'
import './Logo.css'
import logo from './images/FAVPNG_beer-festival-beer-festival-poster-oktoberfest_6kwLxEsP.png'


export default class Logo extends React.Component {
    render() {
        return (
            <>
            <div className="logoImg">
            <img className="logoImgOne" src={logo} alt="beer glass" />
            </div>
            </>
        )
    }
}