import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let Bio =[
    {id:"1",name:"Karen", dob:"11.09.1989", city:"NYC",edu:"9 class",website:"none"}
   ]

let M =[
    {name:"Ura", text:"ha"},
    {name:"Andrey", text:"hi"},
    {name:"Dima", text:"hey"},
    {name:"Petya", text:"go to home"},
    {name:"zina", text:"uyo"}
]



let S = [
    {id:1, name:"Andrey"},
    {id:2, name:"Dima"},
    {id:3, name:"Zina"},
    {id:4, name:"Petya"},
    {id:5, name:"Ura"},
]

let P =[
  { message:"hi how are you?",like:21},
  { message:"My firt post",like:10}
]


ReactDOM.render(<App P={P} S={S} M={M} Bio={Bio}/>, document.getElementById('root'));


   


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
