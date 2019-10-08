import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateForRedirect = state => {
  return {
    isAuth: state.auth.isAuth
  };
};
                              //С БОЛЬШОЙ БУКВЫ (КОМПОНЕНТЫ С БОЛЬШОЙ)
export const WithAuthRedirect = Component => {//влоажена в findContainer в compose()
  class RedirectComponent extends React.Component {
    render() {
      //ЕСЛИ false то редирект
      if (!this.props.isAuth) return <Redirect to={"/login"}></Redirect>;
      //если не folse то в компоненту передаются пропсы
      return <Component {...this.props}></Component>;
    }
  }

  let ConnectedRedirectComponent = connect(mapStateForRedirect)(RedirectComponent);

  return ConnectedRedirectComponent;
};
