import React from "react";
import Contentheader from '../../img/content-header.jpg'
import classes from "./profile.module.scss"
import SubmitContainer from "./submitpost/submitContainer";
import InfoConatiner from "./info/infoconatiner";
import MypostContainer from "./myposts/mypostsContainer";

const Profile = (props) =>{
 
    return(
        <div>
 
        <div className={classes.header}><img src={Contentheader} alt="" /></div>
          <InfoConatiner store={props.store}></InfoConatiner>
            <SubmitContainer store={props.store}></SubmitContainer>
          <MypostContainer store={props.store} ></MypostContainer>
        </div>
    )
}

export default Profile;