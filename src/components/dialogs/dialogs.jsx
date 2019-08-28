import React from "react"
import classes from "./dialogs.module.scss"
import Senderitem from "./sender/sender";
import Messageitem from "./message/message";

    


const Dialogs = (props)=>{
    
    let SenderElement = props.state.S.map(s=><Senderitem id={s.id} name={s.name}></Senderitem>)

    let MessageElement =props.state.M.map(m=><Messageitem name={m.name} text={m.text}></Messageitem>) 

 
    return(
        <div>
        <h2>dialogs</h2>
    <div className={classes.page}>
    <div className={classes.sender}>
 {SenderElement}
</div>
    <div className={classes.message}>
    {MessageElement}
    </div>
   

    </div>
    </div>
    )
}


export default Dialogs;