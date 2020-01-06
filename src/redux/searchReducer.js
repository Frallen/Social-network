import { usersAPI } from "../api/API";
import { updateObjectinArray } from "./helpers";

const Follow = "follow";
const Unfollow = "unfollow";
const Setusers = "SetUsers";
const SetcurrentPage = "SetCurrentPage";
const SettotalUserscount = "SetTotalUsersCount";
const ToggleIsfetching = "Toggleisfetching";
const FollowingProgess = "FollowbingProgess";
let initialstate = {
  users: [],
  pageSize: 9,
  totalUsersCount: 0,
  currentPage: 1,
  isfetching: true,
  followInProgress: []
};

const SearchReducer = (state = initialstate, action) => {
  switch (action.type) {
    case Follow:
      return {
        ...state,
        /*варианты с изменением массива 
              https://prnt.sc/p5emse          
        ... три точки спред оператор (копирование массива)
      передача параметров в функцию в которой выполнятся поиск на соотвестивие и возращается коппия
        */
        users: updateObjectinArray(state.users, action.userId, "id", {
          followed: true
        })
      };
    case Unfollow:
      return {
        ...state,
        users: updateObjectinArray(state.users, action.userId, "id", {
          followed: false
        })
      };
    case Setusers:
      return {
        /*      старые юзеры заменяются новыми их action */
        ...state,
        users: [...action.users]
      };
    case SetcurrentPage:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SettotalUserscount:
      return {
        ...state,
        totalUsersCount: action.TotalUsersCount
      };
    case ToggleIsfetching:
      return {
        ...state,
        isfetching: action.isfetching
      };
    case FollowingProgess: {
      return {
        ...state,
        followInProgress: action.isfetching
          ? [...state.followInProgress, action.userId]
          : state.followInProgress.filter(id => id !== action.userId)
      };
    }
    default:
      return state;
  }
};

export const followSucces = userId => ({ type: Follow, userId });
export const unfollowSucces = userId => ({ type: Unfollow, userId });
export const SetUsers = users => ({ type: Setusers, users });
export const SetCurrentPage = currentPage => ({
  type: SetcurrentPage,
  currentPage
});
export const SetTotalUsersCount = TotalUsersCount => ({
  type: SettotalUserscount,
  TotalUsersCount
});
export const Toggleisfetching = isfetching => ({
  type: ToggleIsfetching,
  isfetching
});
export const togglefollowInProgress = (isfetching, userId) => ({
  type: FollowingProgess,
  isfetching,
  userId
});

export const GetUsers = (currentPage, pageSize) => async dispatch => {
  dispatch(Toggleisfetching(true));
  //api в api.js , вызываем функцию закидываем пропсы
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(Toggleisfetching(false));
  dispatch(SetUsers(data.items));
  dispatch(SetTotalUsersCount(data.totalCount));
};

/* Рефакторинг
при повторяющихся функциях можно сделать одну и передавать в нее параметры
apiMethod это сама айпи с со своим действием,нужен bind
actionCreator это сам ответ с сервака успешен фолловин или нет
нужно создать функцию и передавать в нее нужные параметры заранее определив их в дублирующихся функциях
*/
const FollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(togglefollowInProgress(true, userId));

  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }

  dispatch(togglefollowInProgress(false, userId));
};

export const follow = userId => async dispatch => {
  let apiMethod = usersAPI.followUsers.bind(userId);
  let actionCreator = followSucces;
  FollowFlow(dispatch, userId, apiMethod, actionCreator);
};

export const unfollow = userId => async dispatch => {
  let apiMethod = usersAPI.unfollowUsers.bind(userId);
  let actionCreator = unfollowSucces;
  FollowFlow(dispatch, userId, apiMethod, actionCreator);
};

export default SearchReducer;
