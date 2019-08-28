
let State ={
Profile:{ 
    /*Данные в профиле о пользователе */
Bio:[
    {id:"1",name:"Karen", dob:"11.09.1989", city:"NYC",edu:"9 class",website:"none"}
   ],
/*Посты и лайки*/
P :[ 
    { message:"hi how are you?",like:21},
    { message:"My firt post",like:10}
  ]
},

Messages:{

/*СООБЩЕНИЯ ОТ ПОЛЬЗОВАТЕЛЕЙ*/

M:[
    {name:"Ura", text:"ha"},
    {name:"Andrey", text:"hi"},
    {name:"Dima", text:"hey"},
    {name:"Petya", text:"go to home"},
    {name:"zina", text:"uyo"}
],

/*Кто написал */

S:[
    {id:1, name:"Andrey"},
    {id:2, name:"Dima"},
    {id:3, name:"Zina"},
    {id:4, name:"Petya"},
    {id:5, name:"Ura"},
],
}


}

export default State;