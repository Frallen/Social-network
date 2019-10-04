const SetUserData = "SetUserdata";
const userPhoto = "userPhoto";
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  photo: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetUserData:
      return {
        ...state,
        // придут данные из data и перезатерут state
        // ...action.data,

        userId: action.userId,
        email: action.email,
        login: action.login,
        isAuth: true
      };

    case userPhoto:
      return {
        ...state,
        photo: action.photo
      };
    default:
      return state;
  }
};

export const UserData = (userId, email, login) => ({
  type: SetUserData,
  userId,
  email,
  login
});
export const UserPhoto = photo => ({ type: userPhoto, photo });

export default authReducer;
