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

export const UserData = (userId, email, login, isAuth) => ({
  type: SetUserData,
  data: { userId, email, login, isAuth }
});
export const UserPhoto = photo => ({ type: userPhoto, photo });

export default authReducer;

export const GetAuthUserData = () => dispatch => {
  authAPI.me().then(response => {
    // если ответ  resultCode: 0(сервак) то все окей
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(UserData(id, email, login, true));
    }
  });
};

export const login = ({email, password, rememberMe}) => dispatch => {
  authAPI.login(email, password, rememberMe).then(response => {
    // если ответ  resultCode: 0(сервак) то все окей
    if (response.data.resultCode === 0) {
      dispatch(GetAuthUserData());
    }
  });
};

export const logoutMe = (email, password, rememberMe) => dispatch => {
  authAPI.logout().then(response => {
    // если ответ  resultCode: 0(сервак) то все окей
    if (response.data.resultCode === 0) {
      dispatch(UserData(null, null, null, false));
    }
  });
};
