import { getData, saveData } from "../Utilits/localStorage";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./actionTypes";

const initState = {
    isAuth : getData("appleToken") ? true : false,
    token : null || getData("appleToken"),
    user : {},
    isLoading : false,
    isError : false
}

export const userAuthReducer = (state = initState, { type, payload }) => {
    switch(type) {
        case USER_LOGIN_REQUEST : {
            return {
                ...state,
                isLoading : true
            }
        }
        case USER_LOGIN_SUCCESS : {
            saveData("appleToken", payload);
            return {
                ...state,
                isLoading: false,
                isAuth : true,
                token : payload
            } 
        }
        case USER_LOGIN_FAILURE : {
            saveData("appleToken", payload);
            return {
                ...state,
                isLoading: false,
                isError : true,
                isAuth : false,
                token : payload
            } 
        }
        case USER_LOGOUT : {
            saveData("appleToken", payload)
            //console.log("reducer", payload)
            return {
               ...state,
               isLoading: false,
               isError: false,
               isAuth: false,
               token: payload
            }
        }
        default: return state
    }  
}