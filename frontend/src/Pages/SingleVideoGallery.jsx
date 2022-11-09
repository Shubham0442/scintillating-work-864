import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
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
const poster1 =
  "https://is2-ssl.mzstatic.com/image/thumb/Qkhk0gLz2yXBfHkIhkcSAA/1679x945sr.webp";

const logo =
  "https://is2-ssl.mzstatic.com/image/thumb/WM_VxvRJ1tr0ZldF-c2H1Q/1200x450.webp";
const obj = [
  {
    episodes: [
      {
        epi: "EPISODE 1",
        img: "https://is2-ssl.mzstatic.com/image/thumb/r8WioQPptoS1zWhCz_stsw/1478x832.webp",
        title: "Light Out",
        desc: "When the U.S. government finally tracks them down, the off-the-grid Fox family flees to begin a new life.",
        duration: "57 min",
        release_date: "Apr 30",
      },
      {
        epi: "EPISODE 2",
        img: "https://is4-ssl.mzstatic.com/image/thumb/5Du6a3w-KZmaMAseFSe-Vw/1478x832.webp",
        title: "foxes and coyotes",
        desc: "The Foxes enlist the help of two coyotes who promise to take them across the U.S. border into Mexico.",
        duration: "55 min",
        release_date: "Apr 30",
      },
      {
        epi: "EPISODE 3",
        img: "https://is1-ssl.mzstatic.com/image/thumb/AL4KeAShfOftYDU2PpRE9g/1478x832.webp",
        title: "Everybody Knows This Is Nowhere",
        desc: "With the Feds closing in on them, the Foxes and Chuy must cross the desert on foot—and face adversity both natural and man-made.",
        duration: "47 min",
        release_date: "May 7",
      },
      {
        epi: "EPISODE 4",
        img: "https://is4-ssl.mzstatic.com/image/thumb/5Ic1cP9utxvz-uBmEssh9A/1478x832.webp",
        title: "Bus stop",
        desc: "The Foxes seek refuge in an opulent hacienda, where a family’s all-powerful matriarch sees them as pawns in her own game.",
        duration: "53 min",
        release_date: "May 14",
      },
      {
        epi: "EPISODE 5",
        img: "https://is1-ssl.mzstatic.com/image/thumb/y73ipreK3gMXTpmKCNBUKw/1478x832.webp",
        title: "Elvis, Jesus, Coca-Cola",
        desc: "Arriving in Mexico City, the Fox parents attempt to connect with Allie’s mysterious contact while the kids get into trouble.",
        duration: "49 min",
        release_date: "May 21",
      },
      {
        epi: "EPISODE 6",
        img: "https://is3-ssl.mzstatic.com/image/thumb/W0VZ9__hoaDH8J0O0NvbAA/1478x832.webp",
        title: "Calaca",
        desc: "Held captive by a shadowy organization, Allie and Margot must find a way to escape and get back to their kids.",
        duration: "42 min",
        release_date: "May 28",
      },
    ],
    casts: [
      {
        img: "https://is3-ssl.mzstatic.com/image/thumb/fOKH_5kj7Y792CBiFnC8kg/492x492ve.webp",
        original_name: "Justin Theroux",
        cast_name: "Allie Fox",
      },
      {
        img: "https://is5-ssl.mzstatic.com/image/thumb/TBDo4AO2mIKY1yrYdJbbeQ/492x492ve.webp",
        original_name: "Melissa George",
        cast_name: "Margot Fox",
      },
      {
        img: "https://is5-ssl.mzstatic.com/image/thumb/3NMyzOQuR5bxbiVDhX3y7w/492x492ve.webp",
        original_name: "Logan Polish",
        cast_name: "Dina Fox",
      },
      {
        img: "https://is1-ssl.mzstatic.com/image/thumb/wT4BiHDMPn3aY_CxWbwldg/492x492ve.webp",
        original_name: "Gaberial Bateman",
        cast_name: "Charlie Fox",
      },
      {
        img: "https://is2-ssl.mzstatic.com/image/thumb/A3GB7WVPfX6Z30Bv4JnjUg/492x492bb.webp",
        original_name: "Neil Cross",
        cast_name: "Executive Producer",
      },
      {
        img: "https://is5-ssl.mzstatic.com/image/thumb/m1qM4FBe4qN9f8OAc7ox9g/492x492bb.webp",
        original_name: "Rupert Wyatt",
        cast_name: "Executive Producer",
      },
      {
        img: "https://is1-ssl.mzstatic.com/image/thumb/nd6qrra08q7ot2YLZhvi_w/492x492ve.webp",
        original_name: "Edward L. McDonnell",
        cast_name: "Executive Producer",
      },
      {
        img: "https://is2-ssl.mzstatic.com/image/thumb/gb9baFpEa94p3mWZvcPIig/492x492bb.webp",
        original_name: "Justin Theroux",
        cast_name: "Executive Producer",
      },
      {
        img: "https://is2-ssl.mzstatic.com/image/thumb/vLflCbjhVtF7JXFe2xDNWw/492x492ve.webp",
        original_name: "Bob Bookman",
        cast_name: "Executive Producer",
      },
      {
        img: "https://is1-ssl.mzstatic.com/image/thumb/auXlMqH2JRpF7Kb2d8bTBw/492x492bb.webp",
        original_name: "Alan Gasmer",
        cast_name: "Executive Producer",
      },
      {
        img: "https://is3-ssl.mzstatic.com/image/thumb/eZRW_l3oxkhGtxR74RfOTQ/492x492bb.webp",
        original_name: "Peter Jaysen",
        cast_name: "Executive Producer",
      },
      {
        img: "https://is3-ssl.mzstatic.com/image/thumb/iq0PjpISz60PW5RZCBBhbA/492x492bb.webp",
        original_name: "Paul Theroux",
        cast_name: "Executive Producer",
      },
    ],
  },
];
const SingleVideoGallery = () => {
  return (
    <>
      <div class="playback">
        <video
          width="100%"
          height="100%"
          src="https://is2-ssl.mzstatic.com/image/thumb/r8WioQPptoS1zWhCz_stsw/1478x832.webp"
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
      <VStack bgColor="#2d2d2d" w="100%" h="100vh">
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
        </div>
      </VStack>
    </>
  );
};

export default SingleVideoGallery;
