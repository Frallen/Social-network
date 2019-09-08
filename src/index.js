
import './index.css';
import store from "./redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"




let callSubscriber=(state)=>{


ReactDOM.render(
    <BrowserRouter>
    <Provider value={store}>
<App />
</Provider>
</BrowserRouter>, document.getElementById('root'));

}

callSubscriber(store.getState());

store.subscribe(()=>{
    let state =store.getState()
    callSubscriber(state);
});