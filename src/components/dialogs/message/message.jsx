import React from "react"
import classes from "./../dialogs.module.scss"



const Messageitem =(props)=>{
  

    return(
        <div className={classes.item}>
        <div className={classes.avatar}>
         <div className={classes.boximg}>
           <img src=""/>
       </div>
       <span className={classes.name}>{props.name}</span>
       </div>
       <div className={classes.boxtext}>
           <p>{props.text}</p>
       </div>
   </div>
    )
}
    


export default Messageitem;