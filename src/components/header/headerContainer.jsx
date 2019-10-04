import { connect } from "react-redux";
import React from "react";
import Header from "./header";
import { UserData, UserPhoto, GetAuthUserData } from "../../redux/authReducer";

class Box extends React.Component {
  componentDidMount() {
    this.props.GetAuthUserData();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    photo: state.auth.photo
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  { UserData, UserPhoto, GetAuthUserData }
)(Box);

export default HeaderContainer;
