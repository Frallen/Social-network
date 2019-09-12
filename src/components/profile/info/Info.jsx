import React from "react";
import classes from "./info.module.scss";
import user from "./../../../img/user.jpg"


const Bio =(props)=>{
    
    return(
      <div className={classes.bio}>
  <div className={classes.avatarbox}><img src={user} alt="" /></div>
          <div className={classes.biotext}>
              <h2>{props.name}</h2>
            <ul>
              <li>Date of Birth:&nbsp;{props.dob}</li>
              <li>City&nbsp;{props.city}</li>
              <li>Education&nbsp;{props.edu}</li>
              <li>Website&nbsp;{props.website}</li>
              </ul>
          </div>
          </div>
    )
  }

const Info = (props) =>{

    let bioinfo = props.Bio.map(b=><Bio key={b.id} name={b.name} dob={b.dob} city={b.city} edu={b.edu} website={b.website}></Bio>)
    return(
   <div>
       {bioinfo}
   </div>
    )
}



export default Info;