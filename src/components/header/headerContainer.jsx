import { connect } from "react-redux";
import React from "react";
import Header from "./header";
import { UserData, UserPhoto, GetAuthUserData,logoutMe } from "../../redux/authReducer";

class Box extends React.Component {
  componentDidMount() {
    this.props.GetAuthUserData();
  }
  logout=()=>{
    this.props.logoutMe()
  }

  render() {
    return (
      <>
        <Header {...this.props} logout={this.logout}></Header>
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
  { UserData, UserPhoto, GetAuthUserData,logoutMe }
)(Box);

export default HeaderContainer;
