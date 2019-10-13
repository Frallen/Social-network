import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./login.module.scss";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="login" component="input" name={"name"}></Field>
      <Field placeholder="password" component="input" name={"password"}></Field>
      <Field component="input" type="checkbox" name={"rememberme"}></Field>
      <button className={classes.login}>Login</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({
    form: "Login"
  })(LoginForm);


const Login = props => {
    const onSubmit=(formData)=>{
        //console.log(formData)
    }
  return (
    <div className={classes.logincontainer}>
      <div className={classes.boxlogin}>
      <h3 className={classes.text}>Sign in</h3>
        <ReduxLoginForm onSubmit={onSubmit}></ReduxLoginForm>
      </div>
    </div>
  );
};



export default Login
