import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import {BusinessChat} from "./components/BusinessChat/BusinessChat";

function App() {
  return (
    <div className='app'>
      <Switch>
          <Route exact path='/' render={() => <Redirect to='/business'/>}/>
          <Route path='/business' render={() => <BusinessChat />}/>
          <Route path='/communication' render={() => <div>Communication Chat Page</div>}/>
          <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
      </Switch>
    </div>
  );
}

export default App;
