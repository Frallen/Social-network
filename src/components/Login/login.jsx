import React from "react"
import classes from "./login.module.scss"

const Login=(props)=>{
    return(
        <div className={classes.logincontainer}>
        <div className={classes.boxlogin}>
            <h3 className={classes.text}>Sign in</h3>
            <input placeholder="login" type="text"></input>
            <input placeholder="password" type="text"></input>
            <button className={classes.login}>Login</button>
        </div>
        </div>
    )
}

export default Login