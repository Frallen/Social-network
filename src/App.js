import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Navigation from './components/Navigation/navigation';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import Music from "./components/music/music";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import {BrowserRouter,Route} from 'react-router-dom';

const App = () =>{
  return(
    <BrowserRouter>
    <div className="Wrapper">
<Header></Header>
<Navigation></Navigation>
<div className="content">

<Route path="/profile" component={Profile}></Route>
<Route path="/dialogs" component={Dialogs}></Route>
<Route path="/news" component={News}></Route>
<Route path="/music" component={Music}></Route>
<Route path="/Settings" component={Settings}></Route>

</div>
    </div>
 </BrowserRouter>
  );
}



export default App;
