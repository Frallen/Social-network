import React from "react";
import classes from "./formControls.module.scss";

export const AuthInput = ({ input, meta, ...props }) => {
  const HasError = meta.error && meta.touched;
  return (
    <div>
      <input type="password" {...input} {...props} className={classes.AuthInput}></input>
      {HasError && <div>{HasError && meta.error}</div>}
    </div>
  );
};
export const AuthCheckbox = ({ input, meta, ...props }) => {
    const HasError = meta.error && meta.touched;
    return (
      <div>
        <input type="checkbox" {...input} {...props} className={classes.AuthCheckbox}></input>
        {HasError && <div>{HasError && meta.error}</div>}
      </div>
    );
  };
