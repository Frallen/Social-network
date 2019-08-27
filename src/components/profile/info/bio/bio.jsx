import React from "react";
import classes from "./../info.module.scss";

const Bio =(props)=>{
    
  return(
    <div className={classes.bio}>
<div className={classes.avatarbox}><img src="" alt="" /></div>
        <div className={classes.biotext}>
            <h2>{props.name}</h2>
            <p>Date of Birth:&nbsp;{props.dob}</p>
            <p>City&nbsp;{props.city}</p>
            <p>Education&nbsp;{props.edu}</p>
            <p>Website&nbsp;{props.website}</p>
        </div>
        </div>
  )
}

export default Bio;