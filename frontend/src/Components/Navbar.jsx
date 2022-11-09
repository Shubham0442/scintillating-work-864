import { Box,Button,Flex, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import apple from "./req/appletvlogo.jpeg"


function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
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
      </Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          bgColor={"rgb(51,51,51)"}
        >
          <ModalHeader>Create Apple ID</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              {/* <FormLabel>First name</FormLabel> */}
              <Input
                color={"white"}
                bgColor={"rgb(34,34,34)"}
                ref={initialRef} 
                placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel> */}
              <Input 
                color={"white"}
                bgColor={"rgb(34,34,34)"} 
                placeholder='Surname' />
            </FormControl>
            <FormControl mt={4}>
              <Input
                color={"white"}
                bgColor={"rgb(34,34,34)"}
                placeholder='Date of Birth' />
              <FormLabel
                color={"rgb(153,153,153)"}
              >Your email will be your Apple ID</FormLabel>
            </FormControl>
            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel> */}
              <Input
                color={"white"}
                bgColor={"rgb(34,34,34)"} 
                placeholder='name@example.com' />
            </FormControl>
            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel> */}
              <Input
                color={"white"}
                bgColor={"rgb(34,34,34)"} 
                placeholder='Password' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
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
        <Box
          h={"60%"}
        >
          <Image _hover={{cursor: "pointer"}} maxH={"100%"} src={apple} ></Image>
        </Box>
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