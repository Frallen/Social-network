let renderTree=()=>{}


let state ={
    Navigation:[
        {id:1, name:"Andrey",},
        {id:2, name:"Georg",},
        {id:3, name:"Deren",}
    ],
Profile:{ 
    /*Данные в профиле о пользователе */
Bio:[
    {id:"1",name:"Karen", dob:"11.09.1989", city:"NYC",edu:"9 class",website:"none"}
   ],
/*Посты и лайки*/
P :[ 
    { id:1, message:"hi how are you?",like:21},
    { id:2, message:"My firt post",like:10}
  ],
  newPostText:"Added from bll"
},

Messages:{

/*СООБЩЕНИЯ ОТ ПОЛЬЗОВАТЕЛЕЙ*/

M:[
    { id:1, name:"Ura", text:"ha"},
    { id:2, name:"Andrey", text:"hi"},
    { id:3, name:"Dima", text:"hey"},
    { id:4, name:"Petya", text:"go to home"},
    { id:5, name:"zina", text:"uyo"}
],

/*Кто написал */
/*
S:[
    {id:1, name:"Andrey"},
    {id:2, name:"Dima"},
    {id:3, name:"Zina"},
    {id:4, name:"Petya"},
    {id:5, name:"Ura"},
],*/
}
}


export const addpost= ()=>{
    let newPost={
        id:3,
        message:state.Profile.newPostText,
        like:5,
    }
    state.Profile.P.push(newPost);
    state.Profile.newPostText="";
    renderTree();
}

export const UpdateNewPostText= (newtext)=>{
    state.Profile.newPostText =newtext;
    renderTree();
}

export const subscribe= (observer)=>{
    renderTree=observer;
}

export default state;