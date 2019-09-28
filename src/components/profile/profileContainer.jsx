import { connect } from "react-redux";
import { addpost, PostChange,Userprofile } from "../../redux/profileReducer";
import React from "react"
import {withRouter} from "react-router-dom"
import User from "./user";
import * as axios from "axios";
class UserContainer extends React.Component{

  componentDidMount(){
    //userid определяется в app.js в пути route как параметр
    // достаем из просов id присваиваем для перехода по пользователям
   let userId=this.props.match.params.userId 
   //если нет userid то загружаем второго пользователя(Димыча)
   if(!userId){
     userId=2
   }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(
      response=>{
        this.props.Userprofile(response.data)
        
       
      }
    )
  }

  render(){
 /*  Bio={this.props.Bio}
    P={this.props.P}
    newPostText={this.props.newPostText}
    addpost={this.props.addpost}
    PostChange={this.props.PostChange}*/
    //Можно сократить и передать все данные(они всеравно подготовленны спецально для нее)и не перечислять 
    // то что выше ///
    // копирование все что в просах и отсылка
    return<>
    <User
 // {...this.props}
addpost={this.props.addpost}
PostChange={this.props.PostChange}
Profile={this.props.user}
P={this.props.P}
newPostText={this.props.newPostText}
    ></User>
    </>
  }
}

let mapStateToProps=(state)=>{
  return{
 user:state.Profile.user,
 P:state.Profile.P,
 newPostText:state.Profile.newPostText
  }
}
//для сочетания url и api
let WithUrl=withRouter(UserContainer)
                                                 //{ОБЯЗАТЕЛЬНО СКОБКИ}
const ProfileContainer=connect(mapStateToProps,{addpost,PostChange,Userprofile})(WithUrl);

export default ProfileContainer