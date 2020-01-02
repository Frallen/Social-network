import { authAPI } from "../api/API";
import { stopSubmit } from "redux-form";

const iniitalizeSuccsess = "iniitalizeSuccsess";
const SetUserData = "SetUserdata";
const userPhoto = "userPhoto";
let initialState = {
  initialize: false,
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
        ...action.data
      };
    case iniitalizeSuccsess:
      return {
        ...state,
        initialize: true
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
export default authReducer;

//инициализация приложения
export const iniitalizeApp = (userId, email, login, isAuth) => dispatch => {
  //взятие данных
  let promise = dispatch(GetAuthUserData());
  //подгрузка всех данных,на странице показывается прелоадер
  //после подгрузки всех данных показываются даннные
  Promise.all([promise]).then(() => {
    dispatch({type: iniitalizeSuccsess});
  });
};

export const UserData = (userId, email, login, isAuth) => ({
  type: SetUserData,
  data: { userId, email, login, isAuth }
});
export const UserPhoto = photo => ({ type: userPhoto, photo });

export const GetAuthUserData = () => dispatch => {
  authAPI.me().then(response => {
    // если ответ  resultCode: 0(сервак) то все окей
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(UserData(id, email, login, true));
    }
  });
};

export const login = ({ email, password, rememberMe }) => dispatch => {
  authAPI.login(email, password, rememberMe).then(response => {
    // если ответ  resultCode: 0(сервак) то все окей
    if (response.data.resultCode === 0) {
      dispatch(GetAuthUserData());
    } else {
      //stopSubmit остановка отпраки от reduxForm
      //Указываю название формы в которой нужно остановить отправку
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
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
