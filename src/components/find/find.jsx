import React from "react";
import classes from "./find.module.scss";
const ListPeople = props => {
  return (
    <div className={classes.profile}>
      <div className={classes.avatarbox}>
        <img src={props.photo} alt="" />
      </div>
      <div className={classes.info}>
        <h3 className={classes.name}>{props.Name}</h3>
        <ul>
          <li>{props.Age}</li>
          <li>{props.Gender}</li>
          <li>{props.City}</li>
        </ul>
      </div>
      {props.followed ? (
        <button
          className={classes.follow}
          onClick={() => {
            props.follow(props.id);
          }}>Follow</button>
      ) : (
        <button
          href=""
          className={classes.follow}
          onClick={() => {
            props.unfollow(props.id);
          }}>Unfollow</button>
      )}
    </div>
  );
};

const Find = props => {
 
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
      <div className={classes.container}>{people}</div>
      <a href="#" onClick="" className={classes.loadbutton}>
        Load more
      </a>
    </div>
  );
};

export default Find;
