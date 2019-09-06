
import './index.css';
import store from "./redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"




let callSubscriber=(state)=>{


ReactDOM.render(
    <BrowserRouter>
<App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
</BrowserRouter>, document.getElementById('root'));

}

callSubscriber(store.getState());

store.subscribe(()=>{
    let state =store.getState()
    callSubscriber(state);
});