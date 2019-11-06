import React from "react";
import classes from "./navigation.module.scss";
import {NavLink} from "react-router-dom";

const Friendsonline = (props)=>{
/* Вложенная компонента в которую передается список друзей онлайн (максимум 3) */
    

    return(
        <div className={classes.item}>
        <div className={classes.imgbox}><img src="" alt=""/></div>
        <h3>{props.name}</h3>
    </div>
    )
}

const Navigation = (props) => {

    let friedns=props.friends.map(f=><Friendsonline key={f.id} name={f.name}></Friendsonline>)
    return(
        <div className={classes.navigation}>
        <ul>
            <li className={classes.listitem}><NavLink to="/profile" activeClassName={classes.active} className={classes.button}><i className="far fa-user"></i><span>Profile</span></NavLink></li>
            <li className={classes.listitem}><NavLink to="/dialogs" activeClassName={classes.active} className={classes.button}><i className="far fa-envelope"></i><span>Messages</span></NavLink></li>
            <li className={classes.listitem}><NavLink to="/music" activeClassName={classes.active} className={classes.button}><i className="fas fa-play"></i><span>Music</span></NavLink></li>
            <li className={classes.listitem}><NavLink to="/friends" activeClassName={classes.active} className={classes.button}><i className="fas fa-user-friends"></i><span>Friends</span></NavLink></li>
            <li className={classes.listitem}><NavLink to="/find" activeClassName={classes.active} className={classes.button}><i className="fas fa-search"></i><span>Search</span></NavLink></li>
            <li className={classes.listitem}><NavLink to="/news" activeClassName={classes.active} className={classes.button}><i className="far fa-newspaper"></i><span>News</span></NavLink></li>
            <li className={classes.listitem}><NavLink to="/settings" activeClassName={classes.active} className={classes.button}><i className="fas fa-cog"></i><span>Settings</span></NavLink></li>
        </ul> 
        <div className={classes.friendsonline}>
           {friedns}
        </div>
      </div>

    )
}

export default Navigation;