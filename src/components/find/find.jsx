import React from "react";
import classes from "./find.module.scss";
import * as axios from "axios"



let Find = (props) => {

let loadusers=()=>{ 
if (props.Search.length===0){
  axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
    props.SetUsers(response.data.items)
})
}

}
/*
  axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
    props.SetUsers(response.data.items)
  })*/

// src={p.photos.small != null ? p.photos.small : p.photo} 
// если в api small не рано null то подменить на фото из пропсов

  return <div className={classes.ns}>
      <div className={classes.container}>
  { 
    
    props.Search.map(p =>
     
      <div
        key={p.id}
       
        
      >
    <div className={classes.profile}>
      <div className={classes.avatarbox}>
      <img src={p.photos.small != null ? p.photos.small : p.photo} alt="" />
      </div>
      <div className={classes.info}>
        <h3 className={classes.name}>{p.name}</h3>
        <ul>
          <li>{p.Age}</li>
          <li>{p.Gender}</li>
          <li>{p.City}</li>
        </ul>
      </div>
      {p.followed ? (
        <button
          className={classes.follow}
          onClick={() => {
            props.follow(p.id);
          }}>Follow</button>
      ) : (
        <button
          className={classes.follow}
          onClick={() => {
            props.unfollow(p.id);
          }}>Unfollow</button>
      )}
    </div>
    </div>
    )}
  </div>
  <button onClick={loadusers} className={classes.loadbutton}>
  Load more
</button>
  </div>
}

export default Find;
/*
const Findz = props => {

 let people = props.Search.map(p => 
    <ListPeople
      key={p.id}
      Name={p.Name}
      Age={p.Age}
      Gender={p.Gender}
      City={p.City}
      photo={p.photo}
    ></ListPeople>
  );
  return (
    <div className={classes.ns}>
      <div className={classes.container}>
      <Find></Find>
      </div>
      <button onClick="" className={classes.loadbutton}>
        Load more
      </button>
    </div>
  );
};
*/

