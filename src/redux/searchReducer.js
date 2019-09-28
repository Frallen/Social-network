const Follow = "follow";
const Unfollow = "unfollow";
const Setusers = "SetUsers";
const SetcurrentPage = "SetCurrentPage";
const SettotalUserscount = "SetTotalUsersCount";
const ToggleIsfetching = "Toggleisfetching";
let initialstate = {
  users: [
    /*{id:1,photo:photo, Name:"Julian Ashton Thompson",Age:32,Gender:"Male",City:"NY",followed:true},
    {id:2,photo:photo, Name:"Gavin Christian James",Age:15,Gender:"Male",City:"Woodland",followed:false},
    {id:3,photo:photo, Name:"Jack Colin Peterson",Age:29,Gender:"Male",City:"Livonia",},
    {id:4,photo:photo, Name:"Jason Jackson Sanders",Age:27,Gender:"Male",City:"Chicago",followed:true},
    {id:5,photo:photo, Name:"Jesse Aaron Scott",Age:22,Gender:"Male",City:"ATTICA",followed:false},
    {id:6,photo:photo, Name:"Daniel Mason Turner",Age:18,Gender:"Male",City:"NY",followed:true},
*/
  ],
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
          if (u.id === action.userid) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case Unfollow:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userid) {
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

export const follow = userid => ({ type: Follow, userid });
export const unfollow = userid => ({ type:Unfollow, userid });
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
