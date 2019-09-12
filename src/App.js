import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Friends from "./components/friends/friends";
import Header from "./components/header/header";
import Music from "./components/music/music";
import Profile from "./components/profile/profile";
import Settings from "./components/settings/settings";
import DialogsConatainer from "./components/dialogs/dialogsContainer";
import NavigationContainer from "./components/Navigation/navigationContainer";
import NewsContainer from "./components/news/newsContainer";
import FindContainer from "./components/find/findConatainer";

const App = () => {
  return (
    <div className="Wrapper">
      <Header></Header>
      <NavigationContainer></NavigationContainer>
      <div className="content">
        <Route path="/profile" render={() => <Profile></Profile>}></Route>
        <Route path="/dialogs"render={() => <DialogsConatainer></DialogsConatainer>}></Route>
        <Route path="/news" render={() => <NewsContainer></NewsContainer>}></Route>
        <Route path="/music" render={() => <Music></Music>}></Route>
        <Route path="/Settings" render={() => <Settings></Settings>}></Route>
        <Route path="/friends" render={() => <Friends></Friends>}></Route>
        <Route path="/find" render={() => <FindContainer></FindContainer>}></Route>
      </div>
    </div>
  );
};

export default App;
