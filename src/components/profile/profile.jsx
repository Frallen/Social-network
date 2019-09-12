import React from "react";
import Contentheader from '../../img/content-header.jpg'
import classes from "./profile.module.scss"
import SubmitContainer from "./submitpost/submitContainer";
import InfoConatiner from "./info/infoconatiner";
import MypostContainer from "./myposts/mypostsContainer";

const Profile = () =>{
 
    return(
        <div>
 
        <div className={classes.header}><img src={Contentheader} alt="" /></div>
          <InfoConatiner></InfoConatiner>
            <SubmitContainer></SubmitContainer>
          <MypostContainer></MypostContainer>
        </div>
    )
}

export default Profile;