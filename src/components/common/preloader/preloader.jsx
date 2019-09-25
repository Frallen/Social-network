import React from "react"
import preload from "./../../../img/loading.gif"
import classes from "./preloader.module.scss";
let Preloader=(props)=>{
    return(
        <div className={classes.preload}><img src={preload} alt=""/></div>
    )
}
export default Preloader