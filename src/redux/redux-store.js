import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogsReducer";
import navigationReducer from "./navigationReducer";
import profileReducer from "./profileReducer";
import newsReducer from "./NewsReducer";
import SearchReducer from "./searchReducer";


let reducers=combineReducers({
    Messages:dialogReducer,
    Profile:profileReducer,
    Navigation:navigationReducer,
    News:newsReducer,
    Search:SearchReducer,
})


let store =createStore(reducers)



export default store