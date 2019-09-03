import React from "react";
import Contentheader from '../../img/content-header.jpg'
import classes from "./profile.module.scss"
import Myposts from "./myposts/myposts";
import Submit from "./submitpost/submit";
import Info from "./info/Info";

const Profile = (props) =>{
  let state =props.store.GetState().Profile
    return(
        <div>
 
        <div className={classes.header}><img src={Contentheader} alt="" /></div>
          <Info Bio={state.Bio}></Info>
            <Submit dispatch={props.dispatch} newPostText={state.newPostText} ></Submit>
          <Myposts P={state.P} ></Myposts>
        </div>
    )
}

export default Profile;