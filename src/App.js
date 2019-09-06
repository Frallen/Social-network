import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Navigation from './components/Navigation/navigation';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import Music from "./components/music/music";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import {Route} from 'react-router-dom';
import Friends from './components/friends/friends';


const App = (props) =>{
   

  return(
 
    <div className="Wrapper">
<Header></Header>
<Navigation store={props.store}></Navigation>
<div className="content">

<Route path="/profile" render={()=><Profile  dispatch={props.dispatch}  store={props.store} ></Profile>}></Route>
<Route path="/dialogs" render={()=><Dialogs  dispatch={props.dispatch} store={props.store}></Dialogs>}></Route>
<Route path="/news" render={()=><News dispatch={props.dispatch} store={props.store}></News>}></Route>
<Route path="/music" render={()=><Music></Music>}></Route>
<Route path="/Settings" render={()=><Settings></Settings>}></Route>
<Route path="/friends" render={()=><Friends></Friends>}></Route>
</div>
    </div>

  );
}



export default App;
