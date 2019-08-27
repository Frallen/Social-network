import React from "react";
import classes from "./navigation.module.scss";
import {NavLink} from "react-router-dom";
const Navigation = () => {
    return(
        <div className={classes.navigation}>
        <ul>
            <li className={classes.listitem}><NavLink to="/profile" activeClassName={classes.active} className={classes.button}>Pofile</NavLink></li>
            <li className={classes.listitem}><NavLink to="/dialogs" activeClassName={classes.active} className={classes.button}>Messages</NavLink></li>
            <li className={classes.listitem}><NavLink to="/news" activeClassName={classes.active} className={classes.button}>News</NavLink></li>
            <li className={classes.listitem}><NavLink to="/music" activeClassName={classes.active} className={classes.button}>Music</NavLink></li>
            <li className={classes.listitem}><NavLink to="/settings" activeClassName={classes.active} className={classes.button}>Settings</NavLink></li>
        </ul> 
      </div>
      
    )
}

export default Navigation;