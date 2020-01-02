import { connect } from "react-redux";
import { addpost, PostChange, Profile,ProfileStatus,ProfileUpdateStatus } from "../../redux/profileReducer";
import React from "react";
import { withRouter } from "react-router-dom";
import User from "./user";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
class UserContainer extends React.Component {
  componentDidMount() {
    //userid определяется в app.js в пути route как параметр
    // достаем из просов id присваиваем для перехода по пользователям
   // let userId = this.props.match.params.userId;
    //если нет userid то загружаем второго пользователя(Димыча)
  /*  if (!userId) {
      userId = 2;
    }*/
    this.props.Profile(this.props.userid);
    this.props.ProfileStatus(this.props.userid);
  }

  render() {
    //если не авторизован перекидывает в логин редиркетом из react-router-dom
    //если не isauth не true то редирект

    return (
      <>
        <User {...this.props} status={this.props.status} UpdateStatus={this.props.ProfileUpdateStatus}></User>
      </>
    );
  }
}

// Чтобы не дублировать код нужно использовать hight oreder component
// передаем пропсы проверям на анутетификацию
// отрисовываем            //Hoc(хок)
//let authRedirectComponent = WithAuthRedirect(UserContainer);

let mapStateToProps = state => {
  return {
    user: state.Profile.user,
    P: state.Profile.P,
    newPostText: state.Profile.newPostText,
    status:state.Profile.status,
    userid:state.auth.userId,
  };
};


//let WithUrl = withRouter(authRedirectComponent);
//{ОБЯЗАТЕЛЬНО СКОБКИ}

export default compose(
  connect(
    mapStateToProps,
    { addpost, PostChange, Profile,ProfileStatus,ProfileUpdateStatus }), /* ВСЯ иерархия начинается с низу userContainer перекидавается все выше начиная с WithAuthRedirect*/
    //для сочетания url и api
    withRouter,                         
    //переадресация если не залогинен (хок)
  WithAuthRedirect,
)(UserContainer);
