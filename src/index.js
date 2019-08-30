
import './index.css';
import state, { subscribe } from "./redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addpost, UpdateNewPostText } from "./redux/state"
import {BrowserRouter} from "react-router-dom"




let renderTree=(state)=>{


ReactDOM.render(
    <BrowserRouter>
<App state={state} addpost={addpost} UpdateNewPostText={UpdateNewPostText}/>
</BrowserRouter>, document.getElementById('root'));

}
renderTree(state);
subscribe(renderTree);