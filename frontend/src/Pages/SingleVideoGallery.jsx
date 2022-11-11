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
const poster1 =
  "https://is2-ssl.mzstatic.com/image/thumb/Qkhk0gLz2yXBfHkIhkcSAA/1679x945sr.webp";

const logo =
  "https://is2-ssl.mzstatic.com/image/thumb/WM_VxvRJ1tr0ZldF-c2H1Q/1200x450.webp";
const obj = data;
const SingleVideoGallery = () => {
  return (
    <>
      <div class="playback">
        <video
          width="100%"
          height="100%"
          src="https://www.apple.com/105/media/us/apple-tv-plus/2022/4114721e-12d2-4260-87c4-678589d5f804/anim/supercut/large.mp4"
          type="video/mp4"
          poster={poster1}
        ></video>
        <div class="playback-content">
          <div class="imgdiv">
            <img src={logo} alt="" />
            <p
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              NEW EPISODES FRIDAYS
            </p>
          </div>
          <HStack
            class="playback-content_text"
            // h="250px"
            // border="1px solid yellow"
          >
            <VStack
              //  border="2px solid red"
              w="30%"
              p="10px"
            >
              <Text color="white">Apple TV+</Text>
              <Button w="100%">Play Free Episode</Button>
              <Button w="100%">Start Free Trial</Button>
              <Button w="100%">+ Add to up Next</Button>
            </VStack>
            <VStack
              // border="2px solid green"
              w="50%"
              p="15px"
              justifyContent="space-between"
            >
              <Text
                textAlign="left"
                w="100%"
                color="white"
                fontWeight="400"
                fontSize="15px"
              >
                Allie Fox—a brilliant inventor and stubborn idealist—uproots his
                family for a dangerous quest through Mexico to flee the U.S.
                government and find safety.
              </Text>
              <HStack
                //  border="2px solid green"
                w="100%"
              >
                <p id="p4">Triller . 2021</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-tv"
                  viewBox="0 0 16 16"
                  id="i1"
                >
                  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-badge-4k-fill"
                  viewBox="0 0 16 16"
                  id="i2"
                >
                  <path d="M3.577 8.9v.03h1.828V5.898h-.062a46.781 46.781 0 0 0-1.766 3.001z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm2.372 3.715.435-.714h1.71v3.93h.733v.957h-.733V11H5.405V9.888H2.5v-.971c.574-1.077 1.225-2.142 1.872-3.202zm7.73-.714h1.306l-2.14 2.584L13.5 11h-1.428l-1.679-2.624-.615.7V11H8.59V5.001h1.187v2.686h.057L12.102 5z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-badge-cc"
                  viewBox="0 0 16 16"
                  id="i5"
                >
                  <path d="M3.708 7.755c0-1.111.488-1.753 1.319-1.753.681 0 1.138.47 1.186 1.107H7.36V7c-.052-1.186-1.024-2-2.342-2C3.414 5 2.5 6.05 2.5 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114H6.213c-.048.615-.496 1.05-1.186 1.05-.84 0-1.319-.62-1.319-1.727v-.743zm6.14 0c0-1.111.488-1.753 1.318-1.753.682 0 1.139.47 1.187 1.107H13.5V7c-.053-1.186-1.024-2-2.342-2C9.554 5 8.64 6.05 8.64 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.743z" />
                  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-badge-ad"
                  viewBox="0 0 16 16"
                  id="i6"
                >
                  <path d="m3.7 11 .47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
                  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-badge-sd"
                  viewBox="0 0 16 16"
                  id="i7"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4ZM0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm5.077 7.114c-1.524 0-2.263-.8-2.315-1.749h1.147c.079.466.527.809 1.234.809.739 0 1.13-.339 1.13-.83 0-.418-.3-.634-.923-.779l-.927-.215c-.932-.21-1.52-.747-1.52-1.657 0-1.098.918-1.815 2.24-1.815 1.371 0 2.162.77 2.22 1.692H6.238c-.075-.43-.466-.76-1.103-.76-.655 0-1.046.338-1.046.804 0 .36.294.598.821.712l.932.216c.971.22 1.613.685 1.613 1.691 0 1.117-.857 1.881-2.378 1.881ZM8.307 11V5.001h2.19c1.823 0 2.684 1.09 2.684 2.984 0 1.908-.874 3.015-2.685 3.015H8.308Zm2.031-5.032h-.844v4.06h.844c1.116 0 1.622-.667 1.622-2.02 0-1.354-.51-2.04-1.622-2.04Z"
                  />
                </svg>
              </HStack>
            </VStack>
            <div
              style={{
                width: "20%",
                // border: "2px solid yellow",
                textAlign: "center",
              }}
            >
              <p id="p3">Justin Theroux, Melissa George, Logan Polish</p>
            </div>
          </HStack>
        </div>
      </div>
      {/* ----------------- Top Sectio End here --------------------------- */}
      {/* ------------------Carousal Start ---------------------------------------- */}
      <VStack bgColor="#2d2d2d" h="342vh">
        {/* #2d2d2d */}
        <Stack w="100%" p="15px">
          <Select
            placeholder="Season 1"
            w="8%"
            variant="unstyled"
            // textColor="white"
          >
            <option value="option2">Season 2</option>
          </Select>
        </Stack>

        {/* icon={<MdArrowDropDown />} */}
        <div
          style={{
            width: "100%",
            height: "450px",
            // border: "2px solid red",
            padding: "15px",
          }}
        >
          <Box borderBottom="0.1px solid gray" pb="20px">
            <Swiper
              slidesPerView={3}
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {obj &&
                obj[0].episodes.map((info) => {
                  return (
                    <SwiperSlide
                      key={info.id}
                      style={{ height: "auto", width: "32%" }}
                    >
                      <Card0230 key={info.id} info={info} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </Box>
          {/* ------------------------Trailer part Start from here------------------------------ */}
          <Box borderBottom="0.1px solid gray" pb="20px">
            <VStack>
              <Text color="white" textAlign="left" w="100%" pt="10px">
                Trailers
              </Text>
              <HStack w="100%" gap="15px">
                <Box
                  w="25%"
                  h="200px"
                  backgroundColor="white"
                  display="flex"
                  justifyItems="center"
                  justifyContent="center"
                  backgroundImage="url('https://is2-ssl.mzstatic.com/image/thumb/bcp-BsYXJg4WSm-q6njzcg/1478x832.webp')"
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
                  backgroundImage="url('https://is3-ssl.mzstatic.com/image/thumb/xyULr4ZjJ1zrxTWgPNkldg/1478x832.webp')"
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
                  display="flex"
                  justifyItems="center"
                  justifyContent="center"
                  backgroundImage="url('https://is3-ssl.mzstatic.com/image/thumb/W0VZ9__hoaDH8J0O0NvbAA/1478x832.webp')"
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

          {/* ----------------------Bonus Content Part Start--------------------------------- */}
          <Box borderBottom="0.1px solid gray" pb="20px">
            <VStack>
              <Text color="white" textAlign="left" w="100%" pt="10px">
                Bonus Content
              </Text>
              <HStack w="100%" gap="15px">
                <VStack w="25%">
                  <Box
                    w="100%"
                    h="200px"
                    backgroundColor="white"
                    display="flex"
                    justifyItems="center"
                    justifyContent="center"
                    backgroundImage="url('https://is1-ssl.mzstatic.com/image/thumb/y73ipreK3gMXTpmKCNBUKw/1478x832.webp')"
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
                  <Text
                    w="100%"
                    color="white"
                    textAlign="left"
                    fontSize="13px"
                    pl="5px"
                  >
                    A Family on the Run
                  </Text>
                </VStack>

                <VStack w="25%">
                  <Box
                    w="100%"
                    h="200px"
                    backgroundColor="white"
                    display="flex"
                    justifyItems="center"
                    justifyContent="center"
                    backgroundImage="url('https://is4-ssl.mzstatic.com/image/thumb/zBfC_4lmX-aGrqShM4Io0A/1478x832.webp')"
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
                  <Text
                    w="100%"
                    color="white"
                    textAlign="left"
                    fontSize="13px"
                    pl="5px"
                  >
                    A Theroux Family Affair
                  </Text>
                </VStack>
                <VStack width="25%">
                  <Box
                    w="100%"
                    h="200px"
                    backgroundColor="white"
                    display="flex"
                    justifyItems="center"
                    justifyContent="center"
                    backgroundImage="url('https://is4-ssl.mzstatic.com/image/thumb/5Ic1cP9utxvz-uBmEssh9A/1478x832.webp')"
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
                  <Text
                    w="100%"
                    color="white"
                    textAlign="left"
                    fontSize="13px"
                    pl="5px"
                  >
                    Inside the Episode Light Out
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
          {/* ----------------------Bonus Content Part End here--------------------------------- */}
          {/* ----------------------Related Content start from here------------------------------ */}
          <Box borderBottom="0.1px solid gray" p="30px 0px 30px 0px">
            <Text color="white" w="100%" textAlign="left" pb="10px">
              Related
            </Text>
            <Swiper
              slidesPerView={4}
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
                      style={{ height: "auto", width: "24%" }}
                    >
                      {/* <Card0230 key={info.id} info={info} /> */}
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
          <Box borderBottom="0.1px solid gray" p="30px 0px 30px 0px">
            <Text color="white" w="100%" textAlign="left" pb="10px">
              Cast and Crew
            </Text>
            <Swiper
              slidesPerView={8}
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
              {obj &&
                obj[0].casts.map((info) => {
                  return (
                    <SwiperSlide
                      key={info.id}
                      style={{ height: "auto", w: "25%" }}
                    >
                      <VStack>
                        <Image
                          src={info.img}
                          borderRadius="50%"
                          cursor="pointer"
                        />
                        <Text color="white" fontSize="12px">
                          {info.original_name}
                        </Text>
                        <Text color="#FFFFFFA3" fontSize="12px">
                          {info.cast_name}
                        </Text>
                      </VStack>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </Box>
          {/* Cast and Crew Part start from here */}

          {/* How To watch Apple tV */}
          <Box borderBottom="0.1px solid gray" p="30px 0px 30px 0px" w="100%">
            <Text color="white" w="100%" textAlign="left" pb="10px">
              How to Watch
            </Text>
            <Box w="25%" borderRadius="10px">
              <Image
                borderTopRadius="10px"
                src="https://is1-ssl.mzstatic.com/image/thumb/DB8YqlVtN7M8YvGvgsP2eg/400x225.png"
              />
              <Text
                h="80px"
                color="white"
                display="flex"
                alignItems="center"
                bgColor="#1f1f1f"
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
        </div>
      </VStack>
      <VStack
        h="100vh"
        bgColor="
#1f1f1f"
      ></VStack>
    </>
  );
};

export default SingleVideoGallery;
