import { connect } from "react-redux";
import React from "react";
import Login from "./login";

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
