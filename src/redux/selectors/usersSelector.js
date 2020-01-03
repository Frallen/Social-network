import { createSelector } from "reselect";
//нужен для принятия данных
const getUsersSelector = state => {
  return state.Search.users;
};

/*createSelector нужен только для сложной фильтрации,
а простой селектор можно создавать руками чтобы скрываьб данные из стейта */

//подписка на изменения     вызов данных и передача в users
export const getUsers = createSelector(getUsersSelector, users => {
  return users;
});

export const pageSize = state => {
  return state.Search.pageSize;
};

export const totalUsersCount = state => {
  return state.Search.totalUsersCount;
};

export const currentPage = state => {
  return state.Search.currentPage;
};

export const isFetching = state => {
  return state.Search.isfetching;
};

export const followInProgress = state => {
  return state.Search.followInProgress;
};
