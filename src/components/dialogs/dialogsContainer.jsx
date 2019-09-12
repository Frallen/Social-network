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


export default DialogsConatainer;
