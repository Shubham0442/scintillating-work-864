import React , { useEffect }from 'react'
import Slider from '../Components/SlickSlider'
import SSliderOne from '../Components/StaticSliders/SSliderOne'
import SSliderTwo from '../Components/StaticSliders/SSliderTwo'
import { useSelector , useDispatch} from 'react-redux';
import { getProducts } from '../Redux/AllProductsGalleryReducer/action'
import './Home.css'
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
    <Slider arraySeries = {seriesData?.allSeries}/>
    </div>
    </div>

    <SSliderOne sliderOne = {staticData.sliderOne}/>
    <SSliderTwo slidertwo = {staticData.sliderTwo}/>
    <SSliderTwo slidertwo = {staticData.sliderThree}/>
    <SSliderTwo slidertwo = {staticData.sliderFour}/>
    </>
  )
}

export default Home