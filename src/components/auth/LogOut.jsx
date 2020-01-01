import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logoutMe } from "./../../redux/authReducer";
let LogOut = props => {
  useEffect(() => {
    props.logoutMe();
  });
};

export default connect(null, { logoutMe })(LogOut);
