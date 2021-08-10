import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import {BusinessChat} from "./components/Chats/BusinessChat";
import {Header} from "./components/Header/Header";
import {CommunicationChat} from "./components/Chats/CommunicationChat";
import {Auth} from "./components/Auth/Auth";
import {useSelector} from "react-redux";
import {selectIsAuth} from "./redux/authSelectors";

const App: React.FC = () => {
    const isAuth = useSelector(selectIsAuth);

    if (!isAuth) {
        return <Redirect to='/auth'/>
    }
    return (
        <div className='app'>
            <Header/>
            <Switch>
                <Route exact path='/chat/' render={() => <Redirect to='/chat/business'/>}/>
                <Route path='/chat/business' render={() => <BusinessChat/>}/>
                <Route path='/chat/communication' render={() => <CommunicationChat/>}/>
            </Switch>
        </div>
    );
}

export const PlanktonicsChat: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/chat'/>}/>
                <Route path='/chat' render={() => <App/>}/>
                <Route path='/auth' render={() => <Auth/>}/>
                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
        </div>
    );
}
