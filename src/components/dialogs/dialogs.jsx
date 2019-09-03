import React from "react"
import Messageitem from "./diaglog/MessageItem"

    


const Dialogs = (props)=>{
  debugger
    //let SenderElement = props.state.S.map(s=><Senderitem id={s.id} name={s.name}></Senderitem>)
//let state=props.store.GetState().Messages
    let MessageElement =props.store.GetState().Messages.M.map(m=><Messageitem  id={m.id} name={m.name} text={m.text}></Messageitem>) 

 
    return(
        <div>
        <h2>dialogs</h2>
   
    {MessageElement}
 
    </div>
    )
}


export default Dialogs;