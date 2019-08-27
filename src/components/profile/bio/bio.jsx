import React from "react";
import classes from "./bio.module.scss";
const Bio = () =>{
    return(
        <div className={classes.bio}>
        <div className={classes.avatarbox}><img src="" alt="" /></div>
        <div className={classes.biotext}>
            <h2></h2>
            <p>Date of Birth:</p>
            <p>City</p>
            <p>Education</p>
            <p>Website</p>
        </div>
    </div>
    )
}

export default Bio;