import React from "react";
import Contentheader from '../../img/content-header.jpg'
import classes from "./profile.module.scss"
import Myposts from "./myposts/myposts";
import Submit from "./submitpost/submit";
import Info from "./info/Info";
const Profile = (props) =>{
    return(
        <div>
      
        <div className={classes.header}><img src={Contentheader} alt="" /></div>
          <Info Bio={props.Bio}></Info>
            <Submit></Submit>
          <Myposts P={props.P}></Myposts>
        </div>
    )
}

export default Profile;