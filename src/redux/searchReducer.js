import { usersAPI } from "../api/API";

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
        /*варианты с изменением массива */
        /*      https://prnt.sc/p5emse          */
        /// ... три точки спред оператор (копирование массива)
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case Unfollow:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
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

export const GetUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(Toggleisfetching(true));
    //api в api.js , вызываем функцию закидываем пропсы
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(Toggleisfetching(false));
      dispatch(SetUsers(data.items));
      dispatch(SetTotalUsersCount(data.totalCount));
    });
  };
};
export const follow = userId => {
  return dispatch => {
    dispatch(togglefollowInProgress(true, userId));
    usersAPI.unfollowUsers(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSucces(userId));
      }
    });
    dispatch(togglefollowInProgress(false, userId));
  };
};

export const unfollow = userId => {
  return dispatch => {
    dispatch(togglefollowInProgress(true, userId));
    //из юзерапи вызваю фолловюзер закидываю из пропсов айди, отписка тоже самое
    usersAPI.followUsers(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSucces(userId));
      }
    });
    dispatch(togglefollowInProgress(false, userId));
  };
};
export default SearchReducer;
