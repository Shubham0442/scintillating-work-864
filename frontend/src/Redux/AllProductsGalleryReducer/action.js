import * as types from './actionTypes'
import axios from 'axios'

const getProducts = (params) => (dispatch) => {
    dispatch({type : types.GET_PRODUCTS_REQUEST});
    return axios.get('http://localhost:5251/series/read', params).then((res) => {
        dispatch({type: types.GET_PRODUCTS_SUCCESS, payload : res.data})
    }).catch((e) => {
        dispatch({type: types.GET_PRODUCTS_FAILURE, payload : e});
    });
}
export { getProducts }