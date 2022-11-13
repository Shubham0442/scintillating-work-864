import React from 'react'
import './SCarousel.css'
import Slider from '../../Components/SlickSlider'

export default function SCarousel({arraySeries}) {
    arraySeries?.reverse()
   
    return (
        <div>
    <div className = "carousel_container-new">
    <div className = "video_Container-new">
      <img src = "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/7a/7a/ba/7a7abae8-d3fe-f403-37a2-110761b73b2b/7c60b252-b493-468a-afc2-5656135d2b02.png/2640x990sr.webp" />
    </div>
    <div className = "description-title-new">
      <p className = "descPara-one">COMEDIES</p>
      <h2>It's a Funny Story...</h2>
      <p className = "descPara-two">Enjoy some much-needed levity with these outrageous performances with witty story.</p>
    </div>
    <div className = "slider_component">
    <Slider arraySeries = {arraySeries} styleWrap = {true}/>
    </div>
    </div>
        </div>
    )
}
