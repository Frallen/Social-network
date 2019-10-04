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

class UsersContainer extends React.Component {
  /* constructor(props) {
      super(props);
    }
  */

  componentDidMount() {
    // теперь вся логика в редьюсере
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumer => {
    this.props.getUsers(pageNumer);
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
    Search: state.Search.users,
    pageSize: state.Search.pageSize,
    totalUsersCount: state.Search.totalUsersCount,
    currentPage: state.Search.currentPage,
    /*Это пропс bool*/ isfetching: state.Search.isfetching,
    followInProgress: state.Search.followInProgress
  };
};

const FindContainer = connect(
  mapStateToProps,
  {
    //Вместо передавания друг другу ссылкок,сразу делаем ссылку из редьюсера
    // имя одинаковое
    follow,
    unfollow,
    SetCurrentPage,
    getUsers: GetUsers
  }
)(UsersContainer);

export default FindContainer;
