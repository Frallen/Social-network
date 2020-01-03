import React, { useState, useEffect } from "react";
import classes from "./../profile.module.scss";

const ProfileInfo = props => {
  const [editmode, setActive] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let ActiveEdit = () => {
    setActive(true);
  };

  let DeActiveEdit = () => {
    setActive(false);
    props.UpdateStatus(status);
  };

  let onStateChange = e => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      <ul className={classes.info}>
        <li className={classes.infoitems}>Date of Birth:&nbsp;b.dob</li>
        {!editmode && (
          <li className={classes.editStatus} onDoubleClick={ActiveEdit}>
            {status || "my status"}
          </li>
        )}
        {editmode && (
          <input
            type="text"
            className={classes.editStatus}
            onChange={onStateChange}
            value={status}
            onBlur={DeActiveEdit}
            autoFocus={true}
          />
        )}

        <li>{props.Profile.aboutMe}</li>
        <li className={classes.infoitems}>Website&nbsp;</li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
