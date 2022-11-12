import React from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  VStack,
  Flex,
  useToast
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SingleVideoGallary.css";
import Card0230 from "./Card0230";
import { FaPlayCircle } from "react-icons/fa";
import data from "../data/singlevideogallarydata";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import { getCast } from "../Redux/castCrewReducer/action";
import SeriesLabelsTypes from "../Components/SeriesLabelsTypes";
import Details from "../Components/Details";
import { getSingleProduct } from "../Redux/AllProductsGalleryReducer/action";
 

  


const obj = data;
const SingleVideoGallery = () => {
 
   const allProducts = useSelector((state)=>state.seriesDataReducer.products.allSeries)
   const {id} = useParams()
   const [ currentSeries, setCurrentSeries ] = useState({});
   const allCastCrew = useSelector((state)=>state.castCrewReducer.castCrew)
   const isAuthUser = useSelector((state)=>state.userAuthReducer.isAuth)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const userAuthToast = useToast();
 
   //console.log("allProducts", isAuthUser)

   useEffect(()=>{
      
      dispatch(getSingleProduct(id))
      .then((res)=>{

         if(res.type === "GET_SINGLE_SERIES")
         {
            setCurrentSeries(res.payload)
         }
      })
      dispatch(getCast(id))
        
   }, [id])
  
   //console.log("currentSeries", currentSeries)  

   const handlePlayvideo = () =>{
        
     if(isAuthUser){
        
       navigate(`/${id}/videoplayer`)
     }
     else{
      userAuthToast({
        title: 'Please Signin.',
        description: "",
        status: 'success',
        position:"top",
        duration: 4000,
        isClosable: true,
      })
     }
   }
   

  return (
    <>
      <Box
        bgImage={currentSeries.poster}
        h={"700px"}
        w={"100%"}
         >
          <Box p={"25px"}>
            <Image w={"20%"} src={currentSeries.nameImg} alt={"name"}/>
          </Box>
        <Flex w={"100%"} mt={"400px"} pl={"40px"} gap={"20px"} pr={"25px"}>
              <Box w={"22%"}>
                <Box w={"100%"} mb={"10px"}>
                       <Button onClick={handlePlayvideo} w={"100%"} h={"45px"}>Watch</Button>
                </Box>
                <Box w={"100%"} >
                    <Button w={"100%"} h={"45px"}>+ Add up to Next</Button>
                </Box>
              </Box>
              <Box w={"60%"} textAlign={"left"}>
                  <Text mb={"25px"} fontSize={"15px"} color={"white"}>{currentSeries.description}</Text>
                  <Flex gap={"6px"}>
                      <Text fontSize={"12.5px"} color={"white"} fontWeight={"550"}>{currentSeries.seriesType}</Text>
                      <Text fontSize={"12.5px"} color={"white"} fontWeight={"550"}>{currentSeries.releaseYear}</Text>
                      <SeriesLabelsTypes/>
                  </Flex>
              </Box>
              <Box w={"18%"}  textAlign={"left"}>
                  <Text fontSize={"12.5px"} color={"white"} fontWeight={"550"}>Starring:</Text>
                  <Flex flexWrap={"wrap"} gap={"4px"}>
                       {
                           allCastCrew.length > 0 && 

                           allCastCrew.map((ele, index)=>( 
                            index < 4 &&
                                  <Text key={ele._id} fontSize={"12.5px"} color={"white"} fontWeight={"500"}>{ele.name}</Text>
                              
                           ))

                       }
                  </Flex>
                  <Text pt={"10px"} fontSize={"12.5px"} color={"white"} fontWeight={"550"}>Director</Text>
                  <Box >
                     <Text fontSize={"12.5px"} color={"white"} fontWeight={"500"}>{currentSeries.director}</Text>
                  </Box>
              </Box>
        </Flex>  
      </Box>

      {/* ------------------Carousal Start ---------------------------------------- */}
      <VStack bgColor="white" >
        <div
          style={{
            width: "100%",
            height: "450px",
            // border: "2px solid red",
            padding: "15px",
          }}
        >
          
          {/* ------------------------Trailer part Start from here------------------------------ */}
          <Box borderBottom="0.1px solid #e1e1e1" pb="20px">
            <VStack>
              <Text w={"95%"} color="black" fontWeight={"600"} textAlign="left" pt="10px">
                Trailers
              </Text>
              <HStack  gap="15px" w="95%">
                <Box
                  w="25%"
                  h="200px"
                  backgroundColor="white"
                  display="flex"
                  justifyItems="center"
                  justifyContent="center"
                  backgroundImage={currentSeries.cover}
                  backgroundSize="cover"
                  borderRadius="10px"
                  _hover={{
                    opacity: "0.6",
                  }}
                >
                  <button
                    className="btnhide"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaPlayCircle
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </button>
                </Box>
                <Box
                  w="25%"
                  h="200px"
                  backgroundColor="white"
                  justifyItems="center"
                  justifyContent="center"
                  display="flex"
                  className="btnbox"
                  backgroundImage={currentSeries.poster}
                  backgroundSize="cover"
                  borderRadius="10px"
                  _hover={{
                    opacity: "0.6",
                  }}
                >
                  <button
                    className="btnhide"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaPlayCircle
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </button>
                </Box>

              </HStack>
            </VStack>
          </Box>
          {/* ----------------------------Trailers part end here----------------------------- */}
          {/* ----------------------Related Content start from here------------------------------ */}
          <Box borderBottom="0.1px solid #e1e1e1" p="30px 0px 30px 0px" w={"95%"} m={"auto"}>
            <Text color="Black" w="100%" m={"auto"} fontWeight={"600"} textAlign="left" pb="10px">
              Related
            </Text>
            <Swiper
              slidesPerView={5}
              spaceBetween={15}
              slidesPerGroup={3}
              loop={false}
              loopFillGroupWithBlank={false}
              // pagination={{
              //   clickable: true,
              // }}
              breakpoints={{
                240: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {obj &&
                obj[0].related_contents.map((info) => {
                  return (
                    <SwiperSlide
                      key={info.id}
                      style={{ height: "auto", width: "20%" }}
                    >
                      <Image
                        src={info.img}
                        borderRadius="10px"
                        _hover={{
                          opacity: "0.5",
                        }}
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </Box>
          {/* Related Content end here */}
          {/* Cast and Crew Part start from here */}
          <Box borderBottom="0.1px solid #e1e1e1" p="20px 0px 20px 0px" w={"95%"} m={"auto"}>
            <Text color="black" w="100%" fontWeight={600} textAlign="left" pb="10px">
              Cast and Crew
            </Text>
            <Swiper
              slidesPerView={10}
              spaceBetween={15}
              slidesPerGroup={8}
              loop={false}
              loopFillGroupWithBlank={false}
              // pagination={{
              //   clickable: true,
              // }}
              breakpoints={{
                240: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 8,
                  spaceBetween: 20,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {  
                 allCastCrew.length > 0 &&
                 allCastCrew.map((elem)=>(
                  <SwiperSlide
                  key={elem._id}
                  style={{ height: "auto", w: "20%" }}
                >
                  <VStack>
                    <Image
                      src={elem.Avatar}
                      borderRadius="50%"
                      cursor="pointer"
                    />
                    <Text color="black" fontSize="12px">
                      {elem.name}
                    </Text>
                    <Text color="gray" fontSize="12px">
                      {elem.nameInSeries}
                    </Text>
                  </VStack>
                </SwiperSlide>
                 ))    
              }
            </Swiper>
          </Box>
          {/* Cast and Crew Part start from here */}

          {/* How To watch Apple tV */}
          <Box borderBottom="0.1px solid #e1e1e1" p="30px 0px 30px 0px" w="95%" m={"auto"}>
            <Text color="blabk" fontWeight={"600"} w="100%" textAlign="left" pb="10px">
              How to Watch
            </Text>
            <Box w="25%" borderRadius="10px" boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}>
              <Image
                borderTopRadius="10px"
                src="https://is1-ssl.mzstatic.com/image/thumb/DB8YqlVtN7M8YvGvgsP2eg/400x225.png"
              />
              <Text
                h="80px"
                color="black"
                display="flex"
                alignItems="center"
                bgColor="white"
                borderBottomRadius="10px"
                pl="10px"
              >
                Start Free Trial
              </Text>
            </Box>
            <Text
              width="25%"
              textAlign="center"
              color="white"
              fontSize="12px"
              pt="5px"
            >
              7 days free, then ₹599/month.
            </Text>
          </Box>

          <Box   w={"100%"} pt={"10px"} pb={"10px"} bg={"#f1f3f6"}>
          <Box textAlign={"left"} w={"95%"} m={"auto"}> 
              <Text  w={"95%"} pt={"10px"} pb={"10px"} fontWeight={"600"}>About</Text>

          </Box>
          <Flex w={"95%"} m={"auto"} gap={"10px"} textAlign={"left"} bg={"#f1f3f6"} pb={"30px"}>
                <Box p={"15px"}  borderRadius={"10px"} w={"30%"} bg={"white"}>
                  <Text fontWeight={"600"}>{currentSeries.name}</Text>
                  <Text fontWeight={"600"}  fontSize={"12.5px"} color={"gray"}>{currentSeries.seriesType}</Text>
                  <Text fontWeight={"550"} fontSize={"12.5px"} color={"gray"}>{currentSeries.description}</Text>
                </Box>
                <Box p={"15px"} borderRadius={"10px"} w={"30%"} bg={"white"}>
                  <Text fontWeight={"600"}>16+</Text>
                  <Text fontWeight={"600"} fontSize={"12.5px"} color={"gray"}>Mature Content</Text>
                </Box>
                <Box w={"30%"} bg={"#f1f3f6"}>
                </Box>
          </Flex>
            {/* <Details/> */}
         </Box>
         
        </div>
        
      </VStack>
    </>
  );
};

export default SingleVideoGallery;
