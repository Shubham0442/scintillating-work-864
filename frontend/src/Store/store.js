import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import { userAuthReducer } from "../Redux/UserAuthReducer/userAuthReducer";
import { seriesDataReducer } from '../Redux/AllProductsGalleryReducer/allProductsGalleryReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    userAuthReducer, seriesDataReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))) 

