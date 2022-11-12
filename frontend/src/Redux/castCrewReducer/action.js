import { GET_CAST_CREW_FAILURE, GET_CAST_CREW_REQUEST, GET_CAST_CREW_SUCCESS } from "./actionTypes"
import axios from "axios"

export const getCast = (id)=>(dispatch)=>{
    
     dispatch({ type: GET_CAST_CREW_REQUEST })
   
      return axios.get(`http://localhost:5251/cast/read/${id}`)
      .then((res)=>{
        // console.log("from cast action",res.data.castAndCrew)
         dispatch({ type: GET_CAST_CREW_SUCCESS, payload: res.data.castAndCrew})
      })
      .catch((error)=>{
        console.log(error)
        dispatch({ type: GET_CAST_CREW_FAILURE})
      })
}