import { connect } from "react-redux";
import * as axios from "axios";
import React from "react";
import Header from "./header";
import { UserData,UserPhoto } from "../../redux/authReducer";

class Box extends React.Component {
  componentDidMount() {

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        // http параметр 
        withCredentials: true
      })
      .then( response => {
          // если ответ  resultCode: 0(сервак) то все окей 
          if(response.data.resultCode===0){
              let {id, login,email}=response.data.data
        this.props.UserData(id, login,email);}
/*
    authAPI.auth().then( data => {
          // если ответ  resultCode: 0(сервак) то все окей 
       //   if(response.data.resultCode===0){
        let {id, login,email}=data
        this.props.UserData(id, login,email)

*/

      });

  /*  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
        response=>{
          this.props.UserPhoto(response.data)
    })
*/
  }

  render() {
    return <>
        <Header {...this.props}
  
        ></Header>
      </>
  
  }
}

let mapStateToProps = state => {
  return {
    login: state.auth.login,
    isAuth:state.auth.isAuth,
    photo:state.auth.photo
  };
};

const HeaderContainer = connect(mapStateToProps,{UserData,UserPhoto})(Box);

export default HeaderContainer;
