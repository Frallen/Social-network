import React from "react";
import classes from "./profile.module.scss";
import user from "./../../img/user.jpg";
import Preloader from "../common/preloader/preloader";
import ProfileInfo from "./ProfileInfo/Profileinfo";
const User = props => {
  //если нет профайла(!)

  if (!props.user) {
    return <Preloader></Preloader>;
  }

  let Onaddpost = () => {
    props.addpost();
  };

  let OnPostChange = e => {
    let text = e.target.value;

    props.PostChange(text);
  };


  let Profile = props.user;

  return (
    <div>
      <div>
        <div className={classes.bio}>
          <div className={classes.avatarbox}>
            <img
              src={Profile.photos.large != null ? Profile.photos.small : user}
              alt="User"
            />
          </div>
          <div className={classes.biotext}>
            <h2>{Profile.fullName}</h2>
          <ProfileInfo Profile={props.user} status={props.status} UpdateStatus={props.UpdateStatus}></ProfileInfo>
          </div>
        </div>
      </div>
      <div className={classes.form}>
        <h3>Send post</h3>
        <textarea onChange={OnPostChange} value={props.newPostText}></textarea>
        <div className={classes.submitbox}>
          <button onClick={Onaddpost} className={classes.submit}>
            Send
          </button>
        </div>
      </div>
      <div className={classes.posts}>
        {props.P.map(p => (
          <div key={p.id} className={classes.post}>
            <div className={classes.avatar}>
              <img src="" alt="" />
            </div>
            <p className={classes.text}>{p.message}</p>
            <button className={classes.like}>
              <i className="far fa-heart"></i>
              {p.like}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
