import React from "react"
import classes from "./../news.module.scss";
import demo from "./../../../img/demonews.jpg"
const Newsitem=(props)=>{
   
    return(
        <div className={classes.item}>
        <div className={classes.boximg}><img src={demo} alt=""/></div>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.text}>{props.text}</p>
    </div>
    )
}

export default Newsitem