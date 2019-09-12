import React from "react"
import classes from "./post.module.scss"

const Post = (props) =>{
    return(
        <div>
        <div className={classes.post}>
        <div className={classes.avatar}><img src="" alt=""/></div>
<p className={classes.text}>{props.message}</p>
<a className={classes.like} href=""><i className="far fa-heart"></i>{props.like}</a>
</div>
      
        </div>
    )
}
export default Post;