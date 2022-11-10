import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";

export default class Responsive extends Component {
  render() {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <div {...props} className = "lefttArrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="grey"
          class="bi bi-chevron-left bottom5"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          ></path>
        </svg>
      </div>
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <div {...props} className = "rightArrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="grey"
          // class="bi bi-chevron-right bottom5"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
      </div>
    );
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      prevArrow : <SlickArrowLeft/>,
      nextArrow: <SlickArrowRight />,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            // prevArrow: <SlickArrowLeft />,
            nextArrow: <SlickArrowRight />,
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
        <div className="slider_container">
          <Slider {...settings}>
            <div className="sliderBox">
              <img src="https://is4-ssl.mzstatic.com/image/thumb/QSr2iwSvH8UiozdTcESa-w/1478x832.webp" />
            </div>
            <div className="sliderBox">
              <img src="https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/1478x832.webp" />
            </div>
            <div className="sliderBox">
              <img src="https://is3-ssl.mzstatic.com/image/thumb/CXnyehPcDHEauavhg0D79Q/1478x832.webp" />
            </div>
            <div className="sliderBox">
              <img src="https://is1-ssl.mzstatic.com/image/thumb/r85VE266WcKhz9SdLwhb0A/1478x832.webp" />
            </div>
            <div className="sliderBox">
              <img src="https://is5-ssl.mzstatic.com/image/thumb/RcgPZ5VHFSmr43fk1fjuMw/1478x832.webp" />
            </div>
            <div className="sliderBox">
              <img src="https://is2-ssl.mzstatic.com/image/thumb/6tJakyTEtS0vrgdc9POZpg/1478x832.webp" />
            </div>
            <div className="sliderBox">
              <img src="https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/1478x832.webp" />
            </div>
            <div className="sliderBox">
              <img src="https://is2-ssl.mzstatic.com/image/thumb/_vkF4kzNiSCdmWsVNp0gjw/1478x832.webp" />
            </div>
            <div className="sliderBox">
              <img src="https://is3-ssl.mzstatic.com/image/thumb/QokNbEVUoWjrCk67bJjQUw/1478x832.webp" />
            </div>
            <div className="sliderBox">
              <img src="https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/1478x832.webp" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
