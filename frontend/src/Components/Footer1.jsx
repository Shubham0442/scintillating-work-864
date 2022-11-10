import React from 'react'
import appletv_adobe_express from "./Images/appletv_adobe_express.svg";
import iphone_adobe_express from "./Images/iphone_adobe_express.svg";
import macbook_adobe_express from "./Images/macbook_adobe_express.svg";
import ipad_adobe_express from "./Images/ipad_adobe_express.svg";
import apptv_adobe_express from "./Images/apptv_adobe_express.svg";
import Airplay_adobe_express from "./Images/Airplay_adobe_express.svg";
import game_adobe_express from "./Images/game_adobe_express.svg";
import pendrive_adobe_express from "./Images/pendrive_adobe_express.svg";
import smarttv_adobe_express from "./Images/smarttv_adobe_express.svg";
import { Link, NavLink } from 'react-router-dom';


const Footer1 = () => {

    let customStyle={
        margin:"0px",
        padding:"0px",
        color:"gray"
    }
  return (
    <div style={{backgroundColor:"black",color:"#FFFFFFEB"}}>
        <div style={{
            width:"50%",
            margin:"auto",
            // border:"1px solid white"
            }}>
        <img style={{width:"90px",height:"90px",borderRadius:"20px",marginTop:"50px"}} src={appletv_adobe_express} alt="apple logo" />
        <h2 style={{fontSize:"38px",color:"#FFFFFFEB"}}>Watch Apple TV+ here or anywhere.</h2>
        <div style={{
            // border:"1px solid white"
            }}>
        <h4 style={{fontSize:"19px",width:"720px",textAlign:"center",margin:"auto",}}>Find Apple TV+ on the Apple TV app,available on apple devices,smart TVs, and more</h4>
        <div style={{marginTop:"20px"}}>
        <a href="https://support.apple.com/guide/tvplus/welcome/web" 
        // style={({isActive})=> isActive ? activeStyle : baseStyle}
      
        >See supported devices</a>
        </div>
        {/* <div>
        <a href="https://www.apple.com/apple-tv-app/devices/">Explore compatible devices</a>
        </div> */}
        <div style={{
            display:"flex",
            gap:"70px",
            // border:"1px solid white",
            width:"90%",margin:"auto",
            marginTop:"20px"}}>
            <div>
            <img style={{width:"80px",height:"80px"}} src={apptv_adobe_express} alt="appletv" />
            <h4  style={{margin:"0px",padding:"0px"}}>Apple TV</h4>
            </div>
            <div>
            <img style={{width:"80px",height:"80px"}} src={iphone_adobe_express} alt="iphone" />
            <h4 style={{margin:"0px",padding:"0px"}}>iPhone</h4>
            </div>
            <div>
            <img style={{width:"80px",height:"80px"}} src={ipad_adobe_express} alt="ipad" />
            <h4  style={{margin:"0px",padding:"0px"}}>iPad</h4>
            </div>
            <div>
            <img style={{width:"80px",height:"80px"}} src={macbook_adobe_express} alt="Mac" />
            <h4  style={{margin:"0px",padding:"0px"}}>Mac</h4>
            </div>
            <div>
            <img style={{width:"60px",height:"60px",marginTop:"20px"}} src={Airplay_adobe_express} alt="AirPlay" />
            <h4  style={{margin:"0px",padding:"0px"}}>AirPlay</h4>
            </div>
        </div>
        <div>
            <h3 style={{fontSize:"24px",margin:"0px",padding:"0px",marginTop:"20px"}}>See it on your big Screen</h3>
        </div>
        <div style={{margin:"0px",padding:"0px"}}>
        <div>
        <a href="https://support.apple.com/guide/tvplus/welcome/web" 
        // style={({isActive})=> isActive ? activeStyle : baseStyle}
      
        >Set up your device</a>
        </div>
         <div>
        <a href="https://www.apple.com/apple-tv-app/devices/">Explore compatible devices</a>
        </div>

        </div>

        <div style={{
            // border:"1px solid white",
            display:"flex",
            justifyContent:"space-between",
            width:"80%",
            margin:"auto",
            marginTop:"20px"}}>
            <div>
                <img style={{width:"80px",height:"80px"}} src={pendrive_adobe_express} alt="pendrive" />
                <h3 style={{margin:"0px",padding:"0px"}}>Streaming Devices</h3>
                <h4 style={customStyle}>Roku</h4>
                <h4 style={customStyle}>Fire TV</h4>
                <h4 style={customStyle}>Google TV</h4>
                <h4 style={customStyle}>Android TV</h4>


            </div>
            <div>
            <img style={{width:"80px",height:"80px"}} src={smarttv_adobe_express} alt="smarttv" />
            <h3 style={{margin:"0px",padding:"0px"}}>Smart TVs</h3>
            <h4 style={customStyle}>Samsung</h4>
            <h4 style={customStyle}>LG</h4>
            <h4 style={customStyle}>VIZIO</h4>
            <h4 style={customStyle}>Sony</h4>
            </div>
            <div>
            <img style={{width:"80px",height:"80px"}} src={game_adobe_express} alt="game" />
            <h3 style={{margin:"0px",padding:"0px"}}>Gaming Consoles</h3>
            <h4 style={customStyle}>Roku</h4>
            <h4 style={customStyle}>Fire TV</h4>
            
            </div>
        </div>
        <div>
            <h5>Device availablity varies by country or region</h5>
        </div>
        </div>
    </div>
    </div>
  )}

export default Footer1