import React from "react"
import classes from "./dialogs.module.scss"
import {NavLink} from "react-router-dom"
import { UpdateNewMessagebodyCreator, SendMessageCreator } from "../../redux/dialogsReducer";
    

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
           <p><span>{props.name}</span>:{props.text}</p>
           
       </div>
 </NavLink>
    )
}

const Dialogs = (props)=>{
    //let SenderElement = props.state.S.map(s=><Senderitem id={s.id} name={s.name}></Senderitem>)
//let state=props.store.GetState().Messages

    let MessageElement =props.store.getState().Messages.M.map(m=><Messageitem  id={m.id} name={m.name} text={m.text}></Messageitem>) 
    let onMessageChange=(e)=>{
        let body=e.target.value
       props.dispatch(UpdateNewMessagebodyCreator(body));
  }


  let onSendMessageClick=()=>{
    props.dispatch(SendMessageCreator())
}
 
    return(
        <div>
        <h2>dialogs</h2>
   
    {MessageElement }
    <textarea onChange={onMessageChange}  value={props.NewMessageBody}></textarea>
           <div className={classes.buttonbox}>
           <button onClick={onSendMessageClick}><i className="fas fa-long-arrow-alt-right"></i></button>
           </div>
    </div>
    )
}




export default Dialogs;