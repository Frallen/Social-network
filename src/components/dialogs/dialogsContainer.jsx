import React from "react";
import Dialogs from "./dialogs";
import {
  UpdateNewMessagebodyCreator,
  SendMessageCreator
} from "../../redux/dialogsReducer";
import {connect} from "react-redux"

let mapStateToProps=(state)=>{
  return{ 
    NewMessageBody:state.Messages.NewMessageBody,
    messages:state.Messages.M
  }
}
let mapDispatchToProps=(dispatch)=>{
  return{ 
     MessageChange:(body) => {
      dispatch(UpdateNewMessagebodyCreator(body));
    },
  
    SendMessageClick:() => {
      dispatch(SendMessageCreator());
    }
  }
}


const DialogsConatainer= connect(mapStateToProps, mapDispatchToProps)(Dialogs)


/*
const DialogsConatainer = (props) => {
 
  return (
    <Consumer>
    { 
      (store)=>{

        let MessageChange = (body) => {
          store.dispatch(UpdateNewMessagebodyCreator(body));
        };
      
        let SendMessageClick = () => {
          store.dispatch(SendMessageCreator());
        };

      return( 
      <Dialogs
        MessageChange={MessageChange}
        SendMessageClick={SendMessageClick}
        NewMessageBody={store.getState().Messages.NewMessageBody}
        messages={store.getState().Messages.M}
      ></Dialogs>
      )
      }
    }
    </Consumer>
  );
};
*/
export default DialogsConatainer;
