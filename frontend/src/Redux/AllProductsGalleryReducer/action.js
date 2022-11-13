import * as types from './actionTypes'
import axios from 'axios'

const getProducts = () => (dispatch) => {
    dispatch({type : types.GET_PRODUCTS_REQUEST});
    return axios.get(`${process.env.REACT_APP_BASE_URL}/series/read`).then((res) => {
        dispatch({type: types.GET_PRODUCTS_SUCCESS, payload : res.data})
    }).catch((e) => {
        dispatch({type: types.GET_PRODUCTS_FAILURE, payload : e});
    });
}
export { getProducts }

export const getSingleProduct = (id)=>(dispatch)=>{

    return axios.get(`${process.env.REACT_APP_BASE_URL}/series/read/${id}`)
     .then((res)=>{
        console.log(res.data.token)
         return dispatch({ type: types.GET_SINGLE_SERIES, payload : res.data.allSeries})
     })
     .catch((error)=>{
        console.log(error)
     })
     
}