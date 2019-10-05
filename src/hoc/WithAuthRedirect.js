import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateForRedirect = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export const WithAuthRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"}></Redirect>;
      return <Component {...this.props}></Component>;
    }
  }

  let ConnectedRedirectComponent = connect(mapStateForRedirect)(RedirectComponent);

  return ConnectedRedirectComponent;
};
