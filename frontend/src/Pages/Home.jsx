import React , { useEffect }from 'react'
import Slider from '../Components/SlickSlider'
import SSliderOne from '../Components/StaticSliders/SSliderOne'
import SSliderTwo from '../Components/StaticSliders/SSliderTwo'
import SSliderThree from '../Components/StaticSliders/SSliderThree'
import SSliderFour from '../Components/StaticSliders/SliderFour'
import SCarousel from '../Components/StaticSliders/SCarousel'
import LargeCarousel from '../Components/StaticSliders/LargeCarousel'
import { useSelector , useDispatch} from 'react-redux';
import { getProducts } from '../Redux/AllProductsGalleryReducer/action'
import './Home.css'
import Footer1 from '../Components/Footer1'
import Footer from '../Components/Footer'
import staticData from '../data/sliderData.json'


const Home = () => {

  const seriesData = useSelector(state => state.seriesDataReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    console.log("Series Data", seriesData)
  }, [])
  return (
    <>
    <div className = "carousel_container">
    <div className = "video_Container">
      <img src = "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/bb/2c/ae/bb2cae80-b4e9-7193-8a4f-fb1129ad59ca/278c3382-c095-47b3-ba19-d82887d8b13a.png/3358x1889sr.jpg" />
      {/* <iframe  height = "100%" width = "100%" src={TheMos} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      {/* <video src = {TheMos} autoPlay muted></video> */}

    </div>
    <div className = "description-title">
      <h2>The Home of <br/>Apple Originals</h2>
      <p>Enjoy star-studded, award-winning<br/>
      series, films and more.</p>
      <button>Start Free Trial</button>
      <span>7 days free, then $6.99/month</span>
    </div>
    <div className = "slider_component">
    <Slider arraySeries = {seriesData?.allSeries}/>
    </div>
    </div>
    <SSliderOne sliderOne = {staticData.sliderOne}/>
    <SSliderTwo slidertwo = {staticData.sliderTwo}/>
    <SSliderTwo slidertwo = {staticData.sliderThree}/>
    <SSliderOne sliderOne = {staticData.sliderFour} val = {true}/>
    <SSliderThree sliderthree = {staticData.sliderFive}/>
    <SSliderFour sliderfour = {staticData.sliderSix}/>
    <SCarousel arraySeries = {seriesData?.allSeries}/>
    <SSliderTwo slidertwo = {staticData.sliderSeven} val = {true}/>
    <SSliderTwo slidertwo = {staticData.sliderEight}/>
    <SSliderTwo slidertwo = {staticData.sliderNine}/>
    <SSliderOne sliderOne = {staticData.sliderTen} val = {true}/>
    <SSliderTwo slidertwo = {staticData.sliderEleven}/>
    <LargeCarousel largeSlides = {staticData.sliderTwelve}/>
    <SSliderFour sliderfour = {staticData.sliderThirteen}/>
    <SSliderTwo slidertwo = {staticData.sliderFourteen}/>
    <SSliderFour sliderfour = {staticData.sliderFifteen}/>
    <SSliderTwo slidertwo = {staticData.sliderSixteen}/>
    <SSliderTwo slidertwo = {staticData.sliderSeventeen}/>
    <SSliderFour sliderfour = {staticData.sliderEighteen}/>
    <SSliderTwo slidertwo = {staticData.sliderNineteen}/>
    <SSliderFour sliderfour = {staticData.sliderTwenty}/>
    <SSliderFour sliderfour = {staticData.sliderTwentyone}/>
    <SSliderTwo slidertwo = {staticData.sliderTwentytwo}/>
    <Footer1/>
    <Footer/>
    </>
  )
}

export default Home