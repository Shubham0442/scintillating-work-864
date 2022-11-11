import { Box, Button, FormControl, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Redux/UserAuthReducer/action';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email,
      password
    }
    dispatch(userLogin(payload))
    .then((res) => {
      if(res.type === "USER_LOGIN_SUCCESS"){
        alert("Login Succesful")
      }
      else{
        alert("Invalid credentials")
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
              Login
            </Button>
      </Box>
    </>
  )
}

export default Login