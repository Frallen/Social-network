import Dialogs from "./dialogs";
import {
  UpdateNewMessagebodyCreator,
  SendMessageCreator
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import React from "react";

class Box extends React.Component {
  componentDidMount() {}

  render() {
    return <Dialogs {...this.props}></Dialogs>;
  }
}

let mapStateToProps = state => {
  return {
    NewMessageBody: state.Messages.NewMessageBody,
    messages: state.Messages.M,
    isAuth: state.auth.isAuth
  };
};

const DialogsConatainer = connect(
  mapStateToProps,
  { SendMessageCreator, UpdateNewMessagebodyCreator }
)(Box);

export default DialogsConatainer;
