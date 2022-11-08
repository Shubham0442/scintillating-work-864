import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import SingleVideoGallery from '../Pages/SingleVideoGallery'

const Allroutes = () => {
  return (
    <div>
        <Routes>
           <Route path={"/"} element={<Home/>}></Route>
           <Route path={"/login"} element={<Login/>}></Route>
           <Route path={"/signup"} element={<Signup/>}></Route>
           <Route path={"/singlevideogallery"} element={<SingleVideoGallery/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes