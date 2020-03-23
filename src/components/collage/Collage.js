import React from 'react'
import './Collage.css'
import logo from './images/FAVPNG_beer-festival-beer-festival-poster-oktoberfest_6kwLxEsP.png'


export default class Collage extends React.Component {
    render() {
        return (
            <>
            {/* <div className="collageContainer">
                <div className="collageImage one">
                <img className="collageImgs imgOne" src={beerPhoto} alt="beer bottle" />
                </div>
                <div className="twoImagesContainer">
                    <div className="collageImage two">
                    <img className="collageImgs imgTwo" src={partyPhoto} alt="party" />
                    </div>
                    <div className="collageImage three">
                    <img className="collageImgs imgThree" src={neonPhoto} alt="neon sign" />
                    </div>
                </div>
            </div> */}
            <div className="logoImg">
            <img className="logoImgOne" src={logo} alt="party" />
            </div>
            </>
        )
    }
}