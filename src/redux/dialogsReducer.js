const UpdateNewMessagebody = "UpdateNewMessagebody";
const SendMessage = "SendMessage";

let initialstate = {
  /*СООБЩЕНИЯ ОТ ПОЛЬЗОВАТЕЛЕЙ*/

  M: [
    { id: 1, name: "Ura", text: "ha" },
    { id: 2, name: "Andrey", text: "hi" },
    { id: 3, name: "Dima", text: "hey" },
    { id: 4, name: "Petya", text: "go to home" },
    { id: 5, name: "zina", text: "uyo" }
  ],
  NewMessageBody: ""
};

const dialogReducer = (state = initialstate, action) => {
  switch (action.type) {
    case UpdateNewMessagebody: 
    return{
     ...state,
        NewMessageBody:action.body
      }
      
      
    case SendMessage: 
    let body=state.NewMessageBody
      return{ 
     ...state,
        NewMessageBody : "",
        M:[...state.M,{ id: 6, text: body }]
}

     
    
    default:
      return state;
  }
};

export default dialogReducer;

export const SendMessageCreator = () => ({ type: SendMessage });
export const UpdateNewMessagebodyCreator = body => ({
  type: UpdateNewMessagebody,
  body: body
});
