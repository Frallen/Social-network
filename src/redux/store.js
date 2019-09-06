import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import navigationReducer from "./navigationReducer"
let store={


/*_Приватный объект(сематика) */

_state :{

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
NewMessageBody:""
}
},

GetState(){
    return this._state;
},

_callSubscriber(){},

subscribe(observer){
    this._callSubscriber=observer;
},
    dispatch(action){
        this._state.Profile=profileReducer(this._state.Profile, action)
        this._state.Messages=dialogReducer(this._state.Messages, action)
        this._callSubscriber(this._state)
    }
   


}



///                                                                          text локальная переменная





export default store