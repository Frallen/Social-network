import React, { useEffect } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import Friends from "./components/friends/friends";
import Music from "./components/music/music";
import ProfileContainer from "./components/profile/profileContainer";
import Settings from "./components/settings/settings";
import DialogsConatainer from "./components/dialogs/dialogsContainer";
import NavigationContainer from "./components/Navigation/navigationContainer";
import NewsContainer from "./components/news/newsContainer";
import FindContainer from "./components/find/findConatainer";
import HeaderContainer from "./components/header/headerContainer";
import LoginContainer from "./components/auth/loginContainer";
import { compose } from "redux";
import { connect } from "react-redux";
import { GetAuthUserData } from "./redux/authReducer";
import LogOut from "./components/auth/LogOut";
import {iniitalizeApp} from "./redux/authReducer"
import Preloader from "./components/common/preloader/preloader";
const App = props => {

  useEffect(()=>{
    props.iniitalizeApp()
  })

if(!props.initialize){
  return<Preloader></Preloader>
}

  let content;
  if (props.isAuth) {
    content = (
      <Switch>
        <Route
          path="/profile/:userId?"
          render={() => <ProfileContainer></ProfileContainer>}
        ></Route>
        <Route
          path="/dialogs"
          render={() => <DialogsConatainer></DialogsConatainer>}
        ></Route>
        <Route
          path="/news"
          render={() => <NewsContainer></NewsContainer>}
        ></Route>
        <Route path="/music" render={() => <Music></Music>}></Route>
        <Route path="/Settings" render={() => <Settings></Settings>}></Route>
        <Route path="/friends" render={() => <Friends></Friends>}></Route>
        <Route
          path="/find"
          render={() => <FindContainer></FindContainer>}
        ></Route>
        <Route path="/logout" render={() => <LogOut></LogOut>}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    );
  } else {
    content = (
      <Switch>
        <Route
          path="/news"
          render={() => <NewsContainer></NewsContainer>}
        ></Route>
        <Route
          path="/login"
          render={() => <LoginContainer></LoginContainer>}
        ></Route>
         <Route
          path="/find"
          render={() => <FindContainer></FindContainer>}
        ></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    );
  }
  return (
    <div className="Wrapper">
      <HeaderContainer></HeaderContainer>
      <NavigationContainer></NavigationContainer>
      <div className="main">{content}</div>
    </div>
  );
};

let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    initialize: state.auth.initialize,
  };
};

export default compose(
  connect(mapStateToProps, { GetAuthUserData,iniitalizeApp }),
  withRouter
)(App);
