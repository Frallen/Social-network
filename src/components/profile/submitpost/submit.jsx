import React from "react";
import classes from "./submit.module.scss"



const Submit = (props) => {
   let newpost = React.createRef();
    let addpost=()=>{
        let postMessage =newpost.current.value;
        props.addpost(postMessage);
        newpost.current.value= "";
    }
    return(
        <div className={classes.form}>
                <h3>Send post</h3>
                <textarea rows="5" ref={newpost}></textarea>
                <div className={classes.submitbox}><button href="" onClick={addpost} className={classes.submit}>Send</button></div>
            </div>
    )
}

export default Submit;