import { connect } from "react-redux"
import { FollowAC, SetCurrentPageAC, SetusersAC, UnfollowAC,SetTotalUsersCountAC, ToggleisfetchingAC } from "../../redux/searchReducer"
import React from "react";
import * as axios from "axios";
import Users from "./users";
import Preloader from "../common/preloader/preloader";



class UsersContainer extends React.Component {
    /* constructor(props) {
      super(props);
    }
  */

    componentDidMount() {
      this.props.Toggleisfetching(true)
      axios.get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then(response => {
          this.props.Toggleisfetching(false)
          this.props.SetUsers(response.data.items);
          this.props.SetTotalUsersCount(response.data.totalCount);
        });
    }
  
    onPageChanged = pageNumer => {
      this.props.SetCurrentPage(pageNumer);
      this.props.Toggleisfetching(true)
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumer}&count=${this.props.pageSize}`
        )
        .then(response => {
          this.props.Toggleisfetching(false)
          this.props.SetUsers(response.data.items);
        });
    };
  
    render() {
      //чекакем переменную в редьюссере и возращаем тру фолз
      return <>
      
      {this.props.isfetching ? <Preloader></Preloader> :null}
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
      
    }
  }



let mapStateToProps=(state)=>{
    return{
        Search:state.Search.users,
        pageSize:state.Search.pageSize,
        totalUsersCount:state.Search.totalUsersCount,
        currentPage:state.Search.currentPage,
      isfetching:state.Search.isfetching,
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
        },
        Toggleisfetching:(isfetching)=>{
          dispatch(ToggleisfetchingAC(isfetching))
        }
    }
}




const FindContainer =connect(mapStateToProps,mapdispatchToProps)(UsersContainer)







export default FindContainer