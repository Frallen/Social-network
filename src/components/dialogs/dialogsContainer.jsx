import Dialogs from "./dialogs";
import {
  UpdateNewMessagebodyCreator,
  SendMessageCreator
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import React from "react";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
class DialogClass extends React.Component {
  componentDidMount() {}

  render() {
    return <Dialogs {...this.props}></Dialogs>;
  }
}

let mapStateToProps = state => {
  return {
    NewMessageBody: state.Messages.NewMessageBody,
    messages: state.Messages.M,
  };
};

let authRedirectComponent = WithAuthRedirect(DialogClass)

const DialogsConatainer = connect(
  mapStateToProps,
  { SendMessageCreator, UpdateNewMessagebodyCreator }
)(authRedirectComponent);

export default DialogsConatainer;
