import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link, Navigate, useSearchParams } from "react-router-dom";
import "./SSliderOne.css";

export default class Responsive extends Component {
  render() {
    // console.log("slider-props", this.props.arraySeries)
    let extraClass = ""
    if(this.props?.val){
      extraClass = "extraClass"
    }
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
     
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
           
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className="sliderone_Container">
          <h2 className = {`${extraClass}`}>{this.props.sliderOne.title}</h2>
          <Slider {...settings}>
                {this.props.sliderOne.titleInfo.map((el) => {
                  return <div className = "slideroneBox">
                    <img src = {el.imgUrl} />
                    <p className = "episodeonePara">{el.episodes}</p>
                    <p className = "episodeoneName">{el.episodeTitle}</p>
                    <p className = "episodeoneDescription">{el.episodeDesc}</p>
                   
                  </div>
                  })}
          </Slider>
        </div>
      </div>
    );
  }
}
