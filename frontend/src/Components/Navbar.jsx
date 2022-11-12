import { Box,Button,Flex, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import AccountPopup from './AccountPopup';
import apple from "./req/appletvlogo.jpeg"


function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [toggle, setToggle] = useState(false);
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const isAuthUser = useSelector((state)=>state.userAuthReducer.isAuth)

  const handleToggle =() => {
    setToggle(!toggle);
  }

  return (
    <>{
          isAuthUser ?  <AccountPopup/> :
      
      
      <Button 
        h={"60%"}
        backgroundColor={"#0a84ff"}
        color={"white"}
        fontSize={"14px"}
        _hover={{
          background: "#0a84ff",
          color: "white",
        }}
        onClick={onOpen}
        >
          Sign in
      </Button>}
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"3xl"}
        h = {"4xl"}
      >
        <ModalOverlay />
        <ModalContent
          bgColor={"rgb(51,51,51)"}
        >
          <ModalHeader
            color={"white"} 
            textAlign={"center"}
            fontSize={"3xl"}
          >
            {
              toggle ? "Create Apple ID" : "Login with Apple ID"
            }
          </ModalHeader>
          <ModalCloseButton color={"white"} />
          <ModalBody pb={6}>
            {
              toggle ? <Signup /> : <Login />
            }
          </ModalBody>

          <ModalFooter
            // border={"1px"}
            // borderColor={"white"}
            justifyContent={"space-between"}
          >
            {/* <Box>
              <Text>{ toggle? "New User?" : "Already have an account?" }</Text>
            </Box> */}
            <Button 
              onClick={handleToggle} 
              variant={"link"}
              color={"#0a84ff"} 
            >
              {
                toggle ? "Already have an Apple ID" : "Create New Apple ID"
              }
            </Button>
            {/* <Button colorScheme='blue' mr={3}>
              Save
            </Button> */}
            <Button 
            onClick={onClose}
            bgColor={"#0a84ff"}
            color={"white"}
            >Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

          
    </>
          
  )
}


const Navbar = () => {
  return (
    <Flex
      maxW={"100%"}
      // border={"1px"}
      // borderColor={"white"}
      h={"50px"}
      backgroundColor={"black"}
      px={"40px"}
      direction={"row"}
      justifyContent={"space-between"}
    >
      <Flex
        // border={"1px"}
        // borderColor={"white"}
        w={"75px"}
        h={"100%"}
        alignItems={"center"}
        justifyContent={"flex-start"}
      > 
        <Link to={"/"}>
        <Box
          h={"60%"}
        >
          <Image _hover={{cursor: "pointer"}} maxH={"100%"} src={apple} ></Image>
        </Box>
        </Link>
      </Flex>
      <Stack
        // border={"1px"}
        // borderColor={"white"}
        w={"280px"}
        h={"100%"}
        direction={"row"}
        alignItems={"center"}
        spacing={"15px"}
      >
        <Input
          h={"60%"}
          w={"60%"} 
          placeholder="Search"
          color={"white"}
        />
        {/* <Button
          onClick={InitialFocus}
          h={"60%"}
          backgroundColor={"#0a84ff"}
          color={"white"}
          fontSize={"14px"}
          _hover={{
            background: "#0a84ff",
            color: "white",
          }}
        >Sign in</Button> */}
        <InitialFocus />
      </Stack>
    </Flex>
  )
}

export default Navbar