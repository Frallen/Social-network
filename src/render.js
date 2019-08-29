import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addpost } from "./redux/state"
import {BrowserRouter} from "react-router-dom"

export let renderTree=(state)=>{


ReactDOM.render(
    <BrowserRouter>
<App state={state} addpost={addpost}/>
</BrowserRouter>, document.getElementById('root'));

}

