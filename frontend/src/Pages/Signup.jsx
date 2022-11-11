import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { userSignup } from '../Redux/UserAuthReducer/action';

const Signup = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [signupForm, setSignupForm] = useState({
    firstname : "",
    surname : "",
    dob : "",
    email : "",
    password : ""
  })

  const handleSignupForm = (e) => {
    let {name,value} = e.target;
    setSignupForm({
      ...signupForm,
      [name] : value      
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const payload = {
      firstname : signupForm.firstname,
      surname : signupForm.surname,
      dob : signupForm.dob,
      email : signupForm.email,
      password : signupForm.password
    }
    // console.log(payload);
    dispatch(userSignup(payload))
    .then((res) => {
      if(res.type === "USER_SIGNUP_SUCCESS"){
        alert("Signup Successful")
        navigate("/login")
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
              {/* <FormLabel>First name</FormLabel> */}
              <Input
                color={"white"} name = "firstname" value= {signupForm.firstname} onChange={handleSignupForm}
                bgColor={"rgb(34,34,34)"}
                // ref={initialRef} 
                placeholder='First name' />
            </FormControl>

            <FormControl mt={4} isRequired>
              {/* <FormLabel>Last name</FormLabel> */}
              <Input 
                color={"white"} name = "surname" value= {signupForm.surname} onChange={handleSignupForm}
                bgColor={"rgb(34,34,34)"} 
                placeholder='Surname' />
            </FormControl>
            <FormControl mt={4} isRequired>
              <Input
                color={"white"} name = "dob" value= {signupForm.dob} onChange={handleSignupForm}
                bgColor={"rgb(34,34,34)"}
                type={"date"}
                placeholder='Date of Birth' />
              <FormLabel
                color={"rgb(153,153,153)"}
              >Your email will be your Apple ID</FormLabel>
            </FormControl>
            <FormControl mt={4} isRequired>
              {/* <FormLabel>Last name</FormLabel> */}
              <Input
                color={"white"} name = "email" value= {signupForm.email} onChange={handleSignupForm}
                bgColor={"rgb(34,34,34)"} 
                placeholder='name@example.com' />
            </FormControl>
            <FormControl mt={4} isRequired>
              {/* <FormLabel>Last name</FormLabel> */}
              <Input
                color={"white"} name = "password" value= {signupForm.password} onChange={handleSignupForm}
                bgColor={"rgb(34,34,34)"} 
                placeholder='Password' />
            </FormControl>
            <Button 
              type={"submit"}
              mt={"4"} 
              bgColor={"#0a84ff"}
              color={"white"}  
            >Signup</Button>
      </form>
    </>
  )
}

export default Signup