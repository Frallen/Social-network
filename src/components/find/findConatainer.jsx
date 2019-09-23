import { connect } from "react-redux"
import { FollowAC, SetCurrentPageAC, SetusersAC, UnfollowAC,SetTotalUsersCountAC } from "../../redux/searchReducer"
import find from "./find"

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

const FindContainer =connect(mapStateToProps,mapdispatchToProps)(find)

export default FindContainer