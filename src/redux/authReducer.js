import { authAPI } from "../api/API";

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
        ...action.data,
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
  data: { userId, email, login }
});
export const UserPhoto = photo => ({ type: userPhoto, photo });

export default authReducer;

export const GetAuthUserData = () => {
  return dispatch => {
    authAPI.me().then(response => {
      // если ответ  resultCode: 0(сервак) то все окей
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(UserData(id, email, login));
      }
    });
  };
};
