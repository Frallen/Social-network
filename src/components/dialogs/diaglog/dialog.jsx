import React from "react";
import classes from "./../dialogs.module.scss";
import {NavLink} from "react-router-dom"


const Messageitem =(props)=>{
  

    return(
        <NavLink to={"/dialogs/"+props.id} className={classes.dialog} activeClassName={classes.active}>
        <div className={classes.avatar}>
         <div className={classes.boximg}>
           <img src=""/>
       </div>
       <span className={classes.name}>{props.name}</span>
       </div>
       <div className={classes.boxtext}>
           <p>{props.text}</p>
       </div>
 </NavLink>
    )
}
    


export default Messageitem;