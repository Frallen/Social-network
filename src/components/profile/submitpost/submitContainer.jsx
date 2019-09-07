import React from "react";
import { UpdateNewPostTextActionCreator, addpostActionCreator } from "../../../redux/profileReducer";
import Submit from "./submit";

const SubmitContainer = (props) => {


    let addpost=()=>{
        props.store.dispatch(addpostActionCreator());
   
    }

let PostChange=(text)=>{
 
    props.store.dispatch(UpdateNewPostTextActionCreator(text));
  
}

    return(
      <Submit PostChange={PostChange} addpost={addpost} newPostText={props.store.getState().Profile.newPostText}></Submit>
    )
}

export default SubmitContainer;