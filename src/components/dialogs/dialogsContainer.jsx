import React from "react";
import Dialogs from "./dialogs";
import {
  UpdateNewMessagebodyCreator,
  SendMessageCreator
} from "../../redux/dialogsReducer";

const DialogsConatainer = (props) => {

  let MessageChange = (body) => {
 
    props.store.dispatch(UpdateNewMessagebodyCreator(body));
  };

  let SendMessageClick = () => {
    props.store.dispatch(SendMessageCreator());
  };
  return (
    <Dialogs
      MessageChange={MessageChange}
      SendMessageClick={SendMessageClick}
      NewMessageBody={props.store.getState().Messages.NewMessageBody}
      messages={props.store.getState().Messages.M}
      
    ></Dialogs>
  );
};

export default DialogsConatainer;
