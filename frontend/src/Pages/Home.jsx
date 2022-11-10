import React from 'react'
import Slider from '../Components/SlickSlider'
import './Home.css'


const Home = () => {
  return (
    <>
    <div className = "video_Container">
    <Slider style = {{position : "absolute", top : "90%"}}/>
    </div>
    </>
  )
}

export default Home