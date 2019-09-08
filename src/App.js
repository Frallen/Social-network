import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Friends from './components/friends/friends';
import Header from './components/header/header';
import Music from "./components/music/music";
import Navigation from './components/Navigation/navigation';
import News from "./components/news/news";
import Profile from './components/profile/profile';
import Settings from "./components/settings/settings";
import DialogsConatainer from './components/dialogs/dialogsContainer';


const App = (props) =>{
   

  return(
 
    <div className="Wrapper">
<Header></Header>
<Navigation ></Navigation>
<div className="content">

<Route path="/profile" render={()=><Profile  ></Profile>}></Route>
<Route path="/dialogs" render={()=><DialogsConatainer></DialogsConatainer>}></Route>
<Route path="/news" render={()=><News ></News>}></Route>
<Route path="/music" render={()=><Music></Music>}></Route>
<Route path="/Settings" render={()=><Settings></Settings>}></Route>
<Route path="/friends" render={()=><Friends></Friends>}></Route>
</div>
    </div>

  );
}



export default App;
