import React from "react";
import classes from "./../dialogs.module.scss";
import {NavLink} from "react-router-dom"
import { UpdateNewMessagebodyCreator, SendMessageCreator } from "../../../redux/dialogsReducer";


const Messageitem =(props)=>{

debugger


    let onMessageChange=(e)=>{
        let body=e.target.value
       props.dispatch(UpdateNewMessagebodyCreator(body));
  }


  let onSendMessageClick=()=>{
    props.dispatch(SendMessageCreator())
}

    return(
        <NavLink to={"/dialogs/"+props.id} className={classes.dialog} activeClassName={classes.active}>
        <div className={classes.avatar}>
         <div className={classes.boximg}>
           <img src=""/>
       </div>
       <span className={classes.name}>{props.name}</span>
       </div>
       <div className={classes.boxtext}>
           <p><span>{props.name}</span>:{props.text}</p>
           <textarea onChange={onMessageChange}  value={props.NewMessageBody}></textarea>
           <div className={classes.buttonbox}>
           <button onClick={onSendMessageClick}><i className="fas fa-long-arrow-alt-right"></i></button>
           </div>
       </div>
 </NavLink>
    )
}
    


export default Messageitem;