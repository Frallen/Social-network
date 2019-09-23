const follow="follow"
const unfollow="unfollow"
const SetUsers="SetUsers"
const SetCurrentPage="SetCurrentPage"
const SetTotalUsersCount="SetTotalUsersCount"
let initialstate={

 users:[
    /*{id:1,photo:photo, Name:"Julian Ashton Thompson",Age:32,Gender:"Male",City:"NY",followed:true},
    {id:2,photo:photo, Name:"Gavin Christian James",Age:15,Gender:"Male",City:"Woodland",followed:false},
    {id:3,photo:photo, Name:"Jack Colin Peterson",Age:29,Gender:"Male",City:"Livonia",},
    {id:4,photo:photo, Name:"Jason Jackson Sanders",Age:27,Gender:"Male",City:"Chicago",followed:true},
    {id:5,photo:photo, Name:"Jesse Aaron Scott",Age:22,Gender:"Male",City:"ATTICA",followed:false},
    {id:6,photo:photo, Name:"Daniel Mason Turner",Age:18,Gender:"Male",City:"NY",followed:true},
*/
],
pageSize:9,
totalUsersCount:0,
currentPage:1,
}

const SearchReducer=(state=initialstate,action)=>{
    
   
        switch (action.type) {
            case follow:
                return{
                    ...state,
                    /*варианты с изменением массива */
                    /*      https://prnt.sc/p5emse          */
                    /// ... три точки спред оператор (копирование массива)
                    users:state.users.map(u=>{
                    if(u.id===action.userid){
                        return{...u,followed:true}
                    }   
                    return u 
                    })
                }
                case unfollow:
                   return{
                        ...state,
                        users:state.users.map(u=>{
                            if(u.id===action.userid){
                                return{...u,followed:false}
                            }
                            return u  
                        })
                    }
                case SetUsers:
                    return{
                    /*      старые юзеры заменяются новыми их action */
                        ...state,users:[...action.users]
                    }
                    case SetCurrentPage:
                        return{
                       
                            ...state,currentPage:action.currentPage
                        }
                        case SetTotalUsersCount:
                            return{
                           
                                ...state,totalUsersCount:action.TotalUsersCount
                            }
            default:return state
        }
}


export const FollowAC=(userid)=>({type:follow, userid})
export const UnfollowAC=(userid)=>({type:unfollow, userid})
export const SetusersAC=(users)=>({type:SetUsers,users})
export const SetCurrentPageAC=(currentPage)=>({type:SetCurrentPage,currentPage})
export const SetTotalUsersCountAC=(TotalUsersCount)=>({type:SetTotalUsersCount,TotalUsersCount})


export default SearchReducer