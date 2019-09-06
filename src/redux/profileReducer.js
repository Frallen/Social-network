const addpost = "ADD-POST";
const UpdateNewPostText = "UpdateNewPostText";

let initialstate={
  
    /*Данные в профиле о пользователе */
Bio:[
    {id:"1",name:"Karen", dob:"11.09.1989", city:"NYC",edu:"9 class",website:"none"}
   ],
/*Посты и лайки*/
P :[ 
    { id:1, message:"hi how are you?",like:21},
    { id:2, message:"My firt post",like:10}
  ],
  newPostText:"Added from bll"

}

const profileReducer = (state=initialstate, action) => {
  switch (action.type) {
    case addpost:
      let newPost = {
        id: 3,
        message: state.newPostText,
        like: 5
      };
      state.P.push(newPost);
      state.newPostText = "";
      return state;
    case UpdateNewPostText:
      state.newPostText = action.newtext;
      return state;
      default:return state
  }
};
export default profileReducer;

export const addpostActionCreator=()=>({type:addpost})
export const UpdateNewPostTextActionCreator=(text)=>({type:UpdateNewPostText, newtext:text})