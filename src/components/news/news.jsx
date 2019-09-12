import React from "react";
import classes from "./news.module.scss";
import Newsitem from "./newsitem/newsitem"
const News = (props)=> {
//let state=props.store.getState().News

    let Newscontent =props.News.map(n=><Newsitem key={n.id} title={n.title}
        text={n.text}></Newsitem>)

    return(
        <div className={classes.container}>
           <div className={classes.block}>
             {Newscontent}
           </div>
        </div>
    )
}

export default News;