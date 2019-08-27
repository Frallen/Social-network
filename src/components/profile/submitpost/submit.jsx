import React from "react";
import classes from "./submit.module.scss"
const Submit = () => {
    return(
        <div className={classes.form}>
                <h3>Send post</h3>
                <textarea rows="5"></textarea>
                <div className={classes.submitbox}><a href="" className={classes.submit}>Send</a></div>
            </div>
    )
}

export default Submit;