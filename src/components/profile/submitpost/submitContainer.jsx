
import { UpdateNewPostTextActionCreator, addpostActionCreator } from "../../../redux/profileReducer";
import Submit from "./submit";
import { connect } from "react-redux";

let mapStateToProps=(state)=>{
    return{
        newPostText:state.Profile.newPostText
    }
}


let mapdispatchToProps=(dispatch)=>{

return{


    addpost:()=>{
        dispatch(addpostActionCreator());
   
    },

PostChange:(text)=>{
 
    dispatch(UpdateNewPostTextActionCreator(text));
}
}
}

   

const SubmitContainer =connect(mapStateToProps, mapdispatchToProps)(Submit)




export default SubmitContainer;