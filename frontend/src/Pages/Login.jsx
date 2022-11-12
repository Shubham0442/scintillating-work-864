import { Box, Button, FormControl, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Redux/UserAuthReducer/action';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginToast = useToast()
  const invalidToast = useToast()

  const handleSubmit = () => {
    const payload = {
      email,
      password
    }
    dispatch(userLogin(payload))
    .then((res) => { 
      console.log("login",res)
      if(res.payload !== null){
        loginToast({
          title: "Login Successful",
          duration: 4000,
          position: "top",
          isClosable: true,
          ststus: "success"
        })
      }
      else{
        invalidToast({
          title: "Please Enter valid cridentials",
          duration: 4000,
          position: "top",
          isClosable: true,
          ststus: "error"
        })
      }


    })
  }

  return (
    <>
      <Box
        // border={"1px"}
        w={"80%"}
        // borderColor={"white"}
        display={"flex"}
        flexDirection={"column"}
        margin={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"350px"}
      >
            <FormControl
              mt={4} isRequired
            >
              <Input
                margin={"auto"}
                w={"100%"}
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                color={"white"}
                bgColor={"rgb(34,34,34)"} 
                placeholder='name@example.com' />
            </FormControl>
            <FormControl mt={4} isRequired>
              <Input
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                color={"white"}
                bgColor={"rgb(34,34,34)"} 
                placeholder='Password' />
            </FormControl>
            <Button
              onClick={handleSubmit}
              mt={"4"}
              bgColor={"#0a84ff"}
              color={"white"}
            >
              Signin
            </Button>
      </Box>
    </>
  )
}

export default Login