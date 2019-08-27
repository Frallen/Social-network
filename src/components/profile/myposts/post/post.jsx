import React from "react"
import classes from "./post.module.scss"

const Post = (props) =>{
    return(
        <div>
        <div className={classes.post}>
        <div className={classes.avatar}><img src="" alt=""/></div>
<p className={classes.text}>{props.message}<span className={classes.like}><i className="far fa-heart"></i>{props.like}</span></p>
   
</div>
      
        </div>
    )
}
export default Post;