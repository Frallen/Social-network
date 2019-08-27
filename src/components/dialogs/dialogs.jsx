import React from "react"
import classes from "./dialogs.module.scss"
import {NavLink}from "react-router-dom"
const Senderitem = (props)=>{
    

    return(
        <div className={classes.item}>
        <NavLink to={"/dialogs/"+props.id} className={classes.link} activeClassName={classes.active}>{props.name}</NavLink>
   </div>
    )
}

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
    




const Dialogs = (props)=>{
    
    let SenderitemData = [
        {id:1, name:"Andrey"},
        {id:2, name:"Dima"},
        {id:3, name:"Zina"},
        {id:4, name:"Petya"},
        {id:5, name:"Ura"},
    ]

    let SenderElement = SenderitemData.map(s=><Senderitem id={s.id} name={s.name}></Senderitem>)

    let Messageitemtext =[
        {name:"Ura", text:"ha"},
        {name:"Andrey", text:"hi"},
        {name:"Dima", text:"hey"},
        {name:"Petya", text:"go to home"},
        {name:"zina", text:"uyo"}
    ]

    let MessageElement =Messageitemtext.map(m=><Messageitem name={m.name} text={m.text}></Messageitem>) 

 
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