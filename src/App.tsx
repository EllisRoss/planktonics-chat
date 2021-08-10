import React from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import {BusinessChat} from "./components/BusinessChat/BusinessChat";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <div className='app'>
            <Header />
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/business'/>}/>
                <Route path='/business' render={() => <BusinessChat/>}/>
                <Route path='/communication' render={() => <div>Communication Chat Page</div>}/>
                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
        </div>
    );
}

export default App;
