import { connect } from "react-redux";
import { addpost, PostChange, Profile } from "../../redux/profileReducer";
import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import User from "./user";
class UserContainer extends React.Component {
  componentDidMount() {
    //userid определяется в app.js в пути route как параметр
    // достаем из просов id присваиваем для перехода по пользователям
    let userId = this.props.match.params.userId;
    //если нет userid то загружаем второго пользователя(Димыча)
    if (!userId) {
      userId = 2;
    }

    this.props.Profile(userId);
  }

  render() {
    //если не авторизован перекидывает в логин редиркетом из react-router-dom
    //если не isauth не true то редирект
    if (!this.props.isAuth) return <Redirect to={"/login"}></Redirect>;
    return (
      <>
        <User {...this.props}></User>
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    user: state.Profile.user,
    P: state.Profile.P,
    newPostText: state.Profile.newPostText,
    isAuth: state.auth.isAuth
  };
};
//для сочетания url и api
let WithUrl = withRouter(UserContainer);
//{ОБЯЗАТЕЛЬНО СКОБКИ}
const ProfileContainer = connect(
  mapStateToProps,
  { addpost, PostChange, Profile }
)(WithUrl);

export default ProfileContainer;
