import { connect } from "react-redux";
import {
  follow,
  unfollow,
  SetUsers,
  SetCurrentPage,
  SetTotalUsersCount,
  Toggleisfetching
} from "../../redux/searchReducer";
import React from "react";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import { usersAPI } from "../../api/API";

class UsersContainer extends React.Component {
  /* constructor(props) {
      super(props);
    }
  */

  componentDidMount() {
    this.props.Toggleisfetching(true);
    //api в api.js , вызываем функцию закидываем пропсы
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.Toggleisfetching(false);
      this.props.SetUsers(data.items);
      this.props.SetTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = pageNumer => {
    this.props.SetCurrentPage(pageNumer);
    this.props.Toggleisfetching(true);

    usersAPI.getUsers(pageNumer, this.props.pageSize).then(data => {
      this.props.Toggleisfetching(false);
      this.props.SetUsers(data.items);
    });
  };

  render() {
    //чекакем переменную в редьюссере и возращаем тру фолз
    return (
      <>
        {this.props.isfetching ? <Preloader></Preloader> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          Search={this.props.Search}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        ></Users>
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
    /*Это пропс bool*/ isfetching: state.Search.isfetching
  };
};
/*
let mapdispatchToProps=(dispatch)=>{

  
   /* return{
        follow:(userid)=>{
            dispatch(FollowAC(userid))
        },
        unfollow:(userid)=>{
            dispatch(UnfollowAC(userid))
        },
        SetUsers:(users)=>{
            dispatch(SetusersAC(users))
        },
        SetCurrentPage:(PageNumer)=>{
            dispatch(SetCurrentPageAC(PageNumer))
        },
        SetTotalUsersCount:(TotalCount)=>{
            dispatch(SetTotalUsersCountAC(TotalCount))
        },
        Toggleisfetching:(isfetching)=>{
          dispatch(ToggleisfetchingAC(isfetching))
        }
    }
}
*/

const FindContainer = connect(
  mapStateToProps,
  {
    //Вместо педавания друг другу ссылкок,сразу делаем ссылку из редьюсера
    // имя одинаковое
    follow,
    unfollow,
    SetUsers,
    SetCurrentPage,
    SetTotalUsersCount,
    Toggleisfetching
  }
)(UsersContainer);

export default FindContainer;
