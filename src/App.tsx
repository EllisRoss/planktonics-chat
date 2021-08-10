import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import {BusinessChat} from "./components/Chats/BusinessChat";
import {Header} from "./components/Header/Header";
import {CommunicationChat} from "./components/Chats/CommunicationChat";

function App() {
    return (
        <div className='app'>
            <Header />
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/business'/>}/>
                <Route path='/business' render={() => <BusinessChat/>}/>
                <Route path='/communication' render={() => <CommunicationChat />}/>
                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
        </div>
    );
}

export default App;
