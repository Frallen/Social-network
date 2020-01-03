import { connect } from "react-redux";
import {
  follow,
  unfollow,
  SetCurrentPage,
  GetUsers
} from "../../redux/searchReducer";
import React from "react";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import { compose } from "redux";
import { getUsers, pageSize, totalUsersCount, currentPage, isFetching, followInProgress } from "../../redux/selectors/usersSelector";

class UsersContainer extends React.Component {
 
  componentDidMount() {
    // теперь вся логика в редьюсере
    this.props.GetUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumer => {
    this.props.GetUsers(pageNumer);
  };

  render() {
    //чекакем переменную в редьюссере и возращаем тру фолз
    return (
      <>
        {this.props.isfetching ? <Preloader></Preloader> : null}
        <Users {...this.props} onPageChanged={this.onPageChanged}></Users>
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    Search: getUsers(state),
    pageSize: pageSize(state),
    totalUsersCount: totalUsersCount(state),
    currentPage: currentPage(state),
    /*Это пропс bool*/ isfetching: isFetching(state),
    followInProgress: followInProgress(state)
  };
};

export default compose(
  connect(
    mapStateToProps,
    {//Вместо передавания друг другу ссылкок,сразу делаем ссылку из редьюсера
      // имя одинаковое
      follow,
      unfollow,
      SetCurrentPage,
      GetUsers
    }
  )(UsersContainer)
);
