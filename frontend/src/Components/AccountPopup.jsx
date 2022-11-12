import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Box,
    useToast
  } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'; 
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/UserAuthReducer/action';
import { useNavigate } from 'react-router-dom';




 


const AccountPopup = () => {

    const logoutToast = useToast()
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    const handleLogout = ()=>{

        dispatch(logout())
        
                logoutToast({
                   title: "Logout Successfully",
                   position:"top",
                   duration:4000,
                })
                navigate("/")
        }


  return (
    <Popover>
        <PopoverTrigger>
            <Button variant={"unstyled"}>
                <FaUserCircle fontSize={"20px"} color={"white"}/>
            </Button>
        </PopoverTrigger>
        <PopoverContent bg='#121926' borderColor='blue.1000'>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader textAlign={"left"} color={"white"}>Hello!</PopoverHeader>
            <PopoverBody textAlign={"left"}  color={"white"}>
                 <Box >Watchlist</Box>
                 <Box >My Account</Box>
                 <Button onClick={handleLogout} variant={"unstyled"}>Logout</Button>
            </PopoverBody>
        </PopoverContent>
    </Popover>
  )
}

export default AccountPopup