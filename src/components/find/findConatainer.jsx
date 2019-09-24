import { connect } from "react-redux"
import { FollowAC, SetCurrentPageAC, SetusersAC, UnfollowAC,SetTotalUsersCountAC } from "../../redux/searchReducer"
import React from "react";
import * as axios from "axios";
import Users from "./users";

class UsersContainer extends React.Component {
    /* constructor(props) {
      super(props);
    }
  */
    componentDidMount() {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then(response => {
          this.props.SetUsers(response.data.items);
          this.props.SetTotalUsersCount(response.data.totalCount);
        });
    }
  
    onPageChanged = pageNumer => {
      this.props.SetCurrentPage(pageNumer);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumer}&count=${this.props.pageSize}`
        )
        .then(response => {
          this.props.SetUsers(response.data.items);
        });
    };
  
    render() {
      return (
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          Search={this.props.Search}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        ></Users>
      );
    }
  }



let mapStateToProps=(state)=>{
    return{
        Search:state.Search.users,
        pageSize:state.Search.pageSize,
        totalUsersCount:state.Search.totalUsersCount,
        currentPage:state.Search.currentPage,
    }
}
let mapdispatchToProps=(dispatch)=>{
    return{
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
        }
    }
}




const FindContainer =connect(mapStateToProps,mapdispatchToProps)(UsersContainer)







export default FindContainer