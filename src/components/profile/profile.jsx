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
          <Info Bio={props.state.Bio}></Info>
            <Submit addpost={props.addpost} newPostText={props.state.newPostText} UpdateNewPostText={props.UpdateNewPostText}></Submit>
          <Myposts P={props.state.P} ></Myposts>
        </div>
    )
}

export default Profile;