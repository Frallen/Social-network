import { profileAPI } from "../api/API";

const AddPost = "ADD-POST";
const UpdatenewpostText = "UpdateNewPostText";
const SetUserProfile = "SetUserProfile";
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
  user: null
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
    default:
      return state;
  }
};
export default profileReducer;

export const addpost = () => ({ type: AddPost });
export const PostChange = text => ({ type: UpdatenewpostText, text });
export const Userprofile = user => ({ type: SetUserProfile, user });

export const Profile = userId => {
  return dispatch => {
    profileAPI.myProfile(userId).then(data => {
      dispatch(Userprofile(data));
    });
  };
};
