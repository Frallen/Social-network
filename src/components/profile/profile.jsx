import React from "react";
import Contentheader from '../../img/content-header.jpg'
import classes from "./profile.module.scss"
import Myposts from "./myposts/myposts";
import Submit from "./submitpost/submit";
import Bio from "./bio/bio";
const Profile = () =>{
    return(
        <div>
      
        <div className={classes.header}><img src={Contentheader} alt="" /></div>
          <Bio></Bio>
            <Submit></Submit>
          <Myposts></Myposts>
        </div>
    )
}

export default Profile;