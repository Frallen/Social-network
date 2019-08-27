import React from "react";
import classes from "./myposts.module.scss"
import Post from "./post/post";

const Myposts = () =>{
    let PostsData =[
        { message:"hi how are you?",like:21},
        { message:"My firt post",like:10}
    ]

    let Posts = PostsData.map(allposts=><Post message={allposts.message} like={allposts.like}></Post>)

    return(
        <div className={classes.posts}>
      {Posts}
    </div>
    )
}

export default Myposts;