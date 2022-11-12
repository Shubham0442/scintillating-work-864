import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';

const LoginSignup = () => {
    const [toggle, setToggle] = useState(false);


  return (
     <Box w={"100%"}>
         {
             toggle ? 


             <Login/>

             :

             <Signup/>
         }
     </Box>
  )
}

export default LoginSignup