import React from "react"
import classes from "./../dialogs.module.scss"
import {NavLink}from "react-router-dom"
const Senderitem = (props)=>{
    

    return(
        <div className={classes.item}>
        <NavLink to={"/dialogs/"+props.id} className={classes.link} activeClassName={classes.active}>{props.name}</NavLink>
   </div>
    )
}

export default Senderitem;