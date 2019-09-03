const UpdateNewMessagebody = "UpdateNewMessagebody";
const SendMessage = "SendMessage";

const dialogReducer = (state, action) => {
  switch (action.type) {
    case UpdateNewMessagebody:
      state.NewMessageBody = action.body;
      return state;
    case SendMessage:
      let body = state.NewMessageBody;
      state.NewMessageBody = "";
      state.M.push({ id: 6, text: body });
      return state;
    default:
      return state;
  }
};

export default dialogReducer;


export const SendMessageCreator=()=>({type:SendMessage})
export const UpdateNewMessagebodyCreator=(body)=>({type:UpdateNewMessagebody, body:body})