import React from "react";
import classes from "./myposts.module.scss"
import Post from "./post/post";

const Myposts = (props) =>{
  

    let Posts = props.posts.map(p=><Post key={p.id} message={p.message} like={p.like}></Post>)

    return(
        <div className={classes.posts}>
      {Posts}
    </div>
    )
}

export default Myposts;