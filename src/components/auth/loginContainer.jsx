import React from "react";
import classes from "./auth.module.scss";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "./../../redux/authReducer";
import { required } from "../../validators/validate";
import { AuthInput, AuthCheckbox } from "../../formControls/formControls";

const FormBox = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="email">Емейл</label>
        <Field
          component={AuthInput}
          type="email"
          name="email"
          validate={[required]}
        ></Field>
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        <Field
          component={AuthInput}
          type="password"
          name="password"
          validate={[required]}
        ></Field>
      </div>
      <div className={classes.flexspace}>
        <label htmlFor="rememberMe">Запомнить меня</label>
        <Field component={AuthCheckbox} name="rememberMe"></Field>
      </div>
      <div>
        <button className={classes.login}>Войти</button>
      </div>
    </form>
  );
};

const LoginForm = reduxForm({
  form: "login"
})(FormBox);

const Login = props => {
  let onSubmit = formData => {
    props.login(formData);
  };

  return (
    <div className={classes.logincontainer}>
      <div className={classes.boxlogin}>
        <h5 className={classes.text}>Вход</h5>
        <LoginForm onSubmit={onSubmit}></LoginForm>
      </div>
    </div>
  );
};
/*
let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};
*/
export default connect(null, { login })(Login);
