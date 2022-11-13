import React, { Component } from "react";
import Slider from "react-slick";
import './LargeCarousel.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div className = "parent_container">
      <div className = "child_container">
        <Slider {...settings}>
          {this.props.largeSlides.imgObj.map((el) => {
              return <div className = "childBox_element">
                  <img src = {el.img_poster} alt = "xyz"/>
              </div>
          })}
        </Slider>
      </div>
      </div>
    );
  }
}