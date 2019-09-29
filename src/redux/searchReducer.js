const Follow = "follow";
const Unfollow = "unfollow";
const Setusers = "SetUsers";
const SetcurrentPage = "SetCurrentPage";
const SettotalUserscount = "SetTotalUsersCount";
const ToggleIsfetching = "Toggleisfetching";
let initialstate = {
  users: [],
  pageSize: 9,
  totalUsersCount: 0,
  currentPage: 1,
  isfetching: false,
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
    default:
      return state;
  }
};

export const follow = userId => ({ type: Follow, userId });
export const unfollow = userId => ({ type:Unfollow, userId });
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

export default SearchReducer;
