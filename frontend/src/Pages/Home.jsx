import React from 'react'
import Slider from '../Components/SlickSlider'
import './Home.css'



const sliderInformatio = [
  {
    id : "The Mosquito Coast",
    title : "https://is3-ssl.mzstatic.com/image/thumb/nDP-acPZL94j4i-_QkvgOA/1200x450at.webp",

  }
]


const Home = () => {
  return (
    <>
    <div className = "carousel_container">
    <div className = "video_Container">
      <img src = "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/bb/2c/ae/bb2cae80-b4e9-7193-8a4f-fb1129ad59ca/278c3382-c095-47b3-ba19-d82887d8b13a.png/3358x1889sr.jpg" />
      {/* <iframe  height = "100%" width = "100%" src={TheMos} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      {/* <video src = {TheMos} autoPlay></video> */}

    </div>
    <div className = "description-title">
      <h2>The Home of <br/>Apple Originals</h2>
      <p>Enjoy star-studded, award-winning<br/>
      series, films and more.</p>
      <button>Start Free Trial</button>
      <span>7 days free, then $6.99/month</span>
    </div>
    <div className = "slider_component">
    <Slider />
    </div>
    </div>
    </>
  )
}

export default Home