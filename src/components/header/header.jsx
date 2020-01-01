import React from "react";
import Logo from "../../img/logo.png";
import classes from "./header.module.scss";
import { NavLink } from "react-router-dom";
const Header = props => {
  /*let Photo =props.photo.photos
  <span><img src={ Photo.large != null ? Photo.small : user} alt=""/></span>*/
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <div className={classes.boximg}>
          <img src={Logo} alt="" />
        </div>
        <h1 className={classes.logotext}>Scramble</h1>
      </div>
      <ul className={classes.login}>
        <li className={classes.loginelement}>
          {//если автаризован(true) то из пропсов достать логин,если нет
          //  то показать ссылку на авторизацию
          props.isAuth && props.login}
          {!props.isAuth ? (
            <NavLink to={"/login"}>Login</NavLink>
          ) : (
            <button onClick={props.logout}>Выход</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
