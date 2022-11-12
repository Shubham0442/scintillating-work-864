import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import SingleVideoGallery from '../Pages/SingleVideoGallery'

const Allroutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
           <Route path={"/"} element={<Home/>}></Route>
           <Route path={"/login"} element={<Login/>}></Route>
           <Route path={"/signup"} element={<Signup/>}></Route>
           <Route path={"/:id"} element={<SingleVideoGallery/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes