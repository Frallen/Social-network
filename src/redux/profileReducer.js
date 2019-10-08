import { profileAPI } from "../api/API";

const AddPost = "ADD-POST";
const UpdatenewpostText = "UpdateNewPostText";
const SetUserProfile = "SetUserProfile";
const SetStatus = "SetStatus";
let initialstate = {
  /*Данные в профиле о пользователе */
  /*
Bio:[
    {id:"1",name:"Karen", dob:"11.09.1989", city:"NYC",edu:"9 class",website:"none"}
   ],*/
  /*Посты и лайки*/
  P: [
    { id: 1, message: "hi how are you?", like: 21 },
    { id: 2, message: "My firt post", like: 10 }
  ],
  newPostText: "Added from bll",
  user: null,
  status: ""
};

const profileReducer = (state = initialstate, action) => {
  switch (action.type) {
    case AddPost:
      return {
        ...state,
        newPostText: "",
        P: [...state.P, { id: 3, message: state.newPostText, like: 5 }]
      };

    case UpdatenewpostText:
      return {
        ...state,
        newPostText: action.text
      };
    case SetUserProfile:
      return {
        ...state,
        user: action.user
      };
    case SetStatus: {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
};
export default profileReducer;

export const addpost = () => ({ type: AddPost });
export const PostChange = text => ({ type: UpdatenewpostText, text });
export const Userprofile = user => ({ type: SetUserProfile, user });
export const MyStatus = status => ({ type: SetStatus, status });

//Санки,саночки,апишеки

export const Profile = userId => {
  return dispatch => {
    profileAPI.myProfile(userId).then(data => {
      dispatch(Userprofile(data));
    });
  };
};

export const ProfileStatus = userId => {
  return dispatch => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(MyStatus(data));
    });
  };
};

export const ProfileUpdateStatus=status=>{
  return dispatch=>{
    profileAPI.updateStatus(status).then(data=>{
      if(data.data.resultCode===0){
      dispatch(MyStatus(data))
      }
    })
  }
}