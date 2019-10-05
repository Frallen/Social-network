import { connect } from "react-redux";
import Login from "./login";
import React from "react";

class Box extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <Login {...this.props}></Login>
      </>
    );
  }
}

let mapStateToProps = state => {};

const LoginContainer = connect(mapStateToProps)(Box);

export default LoginContainer;
