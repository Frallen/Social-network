import { combineReducers, createStore, applyMiddleware } from "redux";
import dialogReducer from "./dialogsReducer";
import navigationReducer from "./navigationReducer";
import profileReducer from "./profileReducer";
import newsReducer from "./NewsReducer";
import SearchReducer from "./searchReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk"
import {reducer as formReducer} from "redux-form"
let reducers=combineReducers({
    Messages:dialogReducer,
    Profile:profileReducer,
    Navigation:navigationReducer,
    News:newsReducer,
    Search:SearchReducer,
    auth:authReducer,
    form:formReducer,
})


let store =createStore(reducers,applyMiddleware(thunk))



export default store