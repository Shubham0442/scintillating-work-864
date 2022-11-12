import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../Redux/AllProductsGalleryReducer/action';

const Videoplayer = () => { 

    const { id } = useParams();
    const [ video , setVideo ] = useState("")
    const dispatch = useDispatch()
   
    console.log("videoplayer", id)

    useEffect(()=>{
        
        dispatch( getSingleProduct(id))
        .then((res)=>{
            if(res.type === "GET_SINGLE_SERIES")
            {
               setVideo(res.payload.videoLink)
            }
        })
    }, [id])

    // style="border:0; height:100%; left:0; overflow:hidden; position:absolute; top:0; width:100%"
  return (
         <Box w={"100%"} h={"700px"}>
            <iframe allow="autoplay; gyroscope;" allowfullscreen height="100%" 
            referrerpolicy="strict-origin"
             src={video} 
             style={{ width:"100%", h:"100%", overflow:"hidden"}}
             title="Embedded content made on Kapwing" 
             width="100%">
            </iframe>
        </Box >
  )
}

export default Videoplayer