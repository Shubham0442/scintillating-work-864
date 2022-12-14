import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import "./SlickSlider.css";

export default class Responsive extends Component {
  render() {
    console.log("slider-props", this.props.arraySeries)
    let extraClass = "";
    if(this.props.styleWrap)
    {
      extraClass = 'slideBottomPadding'
    }

   
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
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
        <div className= {`slider_container`}>
          <h2 className= {`${extraClass}`}>Featured</h2>
          <Slider {...settings}>
            {this.props.arraySeries?.map((el) => {
              return <Link to = {`/${el._id}`}>
              <div key = {el._id} className= {`sliderBox`}>
              <img src= {el.cover} />
            </div>
            </Link>
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
