import React from "react";
import classes from "./singlemessage.module.scss";

const SingleMessage =(props)=>{
    return(
        <div className={classes.box}>
            <div className={classes.messages}>
                <div className={classes.item}>
                    <div className={boximg}><img src="" alt=""/></div>
                    <p className={classes.text}></p>
                </div>
                <div className={classes.item}>
                    <div className={boximg}><img src="" alt=""/></div>
                    <p className={classes.text}></p>
                </div>
            </div>
            <div className={classes.send}>
            <textarea  cols="3" rows="1"></textarea>
            <button><i className="fas fa-long-arrow-alt-right"></i></button>
            </div>
        </div>
    )
}

export default SingleMessage