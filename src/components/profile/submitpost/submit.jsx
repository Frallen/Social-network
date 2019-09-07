import React from "react";
import classes from "./submit.module.scss"

const Submit = (props) => {



    let Onaddpost=()=>{
        props.addpost();
   
    }

let OnPostChange=(e)=>{
    let text = e.target.value;
    props.PostChange(text);
  
}

    return(
        <div className={classes.form}>
                <h3>Send post</h3>
                <textarea rows="5" onChange={OnPostChange} value={props.newPostText} ></textarea>
                <div className={classes.submitbox}><button href="" onClick={Onaddpost} className={classes.submit}>Send</button></div>
            </div>
    )
}

export default Submit;