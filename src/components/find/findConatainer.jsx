import {connect} from "react-redux"
import find from "./find"
import { FollowAC, UnfollowAC, SetusersAC } from "../../redux/searchReducer"

let mapStateToProps=(state)=>{
    return{
        Search:state.Search.users
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
        }
    }
}

const FindContainer =connect(mapStateToProps,mapdispatchToProps)(find)

export default FindContainer