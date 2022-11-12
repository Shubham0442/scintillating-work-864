
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'



const PrivatesRoute = ({children}) => {

    const isUserAuth = useSelector((state)=>state.userAuthReducer.isAuth)
    

    if(!isUserAuth){
        return <Navigate to={"/login"} />
    }
    else{
        return children
    }


 
}

export default PrivatesRoute