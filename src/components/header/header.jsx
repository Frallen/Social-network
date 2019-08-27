import React from "react";
import Logo from '../../img/logo.png';
import classes from "./header.module.scss"
const Header = () =>{
    return(
        <div className={classes.header}>
        <div className={classes.logo}>
          <img src={Logo} alt="" />
         <a href="">Scramble</a>
          </div>
      </div>
    )
}

export default Header;