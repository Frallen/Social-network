import React from "react";
import classes from "./submit.module.scss"
import { UpdateNewPostTextActionCreator, addpostActionCreator } from "../../../redux/profileReducer";

const Submit = (props) => {

    let newpost = React.createRef();

    let addpost=()=>{
        props.dispatch(addpostActionCreator());
   
    }

let OnPostChange=()=>{
    let text =newpost.current.value;
    props.dispatch(UpdateNewPostTextActionCreator(text));
  
}

    return(
        <div className={classes.form}>
                <h3>Send post</h3>
                <textarea rows="5" onChange={OnPostChange} value={props.newPostText} ref={newpost}></textarea>
                <div className={classes.submitbox}><button href="" onClick={addpost} className={classes.submit}>Send</button></div>
            </div>
    )
}

export default Submit;