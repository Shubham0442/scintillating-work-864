import axios from "axios"
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "./actionTypes"

export const userSignup =(cred) => (dispatch) => {
    dispatch({type : USER_SIGNUP_REQUEST})

    return axios.post("http://localhost:5251/signup", cred)
    .then((res) => {
        console.log(res.data)
        return dispatch({type: USER_SIGNUP_SUCCESS})
    })
    .catch((error) => {
        console.log(error)
        dispatch({type: USER_SIGNUP_FAILURE})
    })
    console.log(cred);
}

export const userLogin = (cred) => (dispatch) => {
    dispatch({ type : USER_LOGIN_REQUEST })

    return axios.post("http://localhost:5251/login", cred)
    .then((res) => {
        console.log(res.data)
        return dispatch({ type: USER_LOGIN_SUCCESS, payload : res.data.token })
    })
    .catch((error) => {
        console.log(error)
        dispatch({type : USER_LOGIN_FAILURE})
    });
}

export const logout = () => (dispatch) => {
    dispatch({ type: USER_LOGOUT, payload : null })
}
 