const addpost = "ADD-POST";
const UpdateNewPostText = "UpdateNewPostText";

const profileReducer = (state, action) => {
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