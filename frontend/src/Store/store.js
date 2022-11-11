import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import { userAuthReducer } from "../Redux/UserAuthReducer/userAuthReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    userAuthReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))) 

