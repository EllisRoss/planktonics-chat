import {Button, Input} from "antd";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../../redux/authSelectors";
import {Redirect} from "react-router-dom";
import {authActions} from "../../redux/authReducer";
import {v1} from "uuid";
import styles from "./Auth.module.css"

export const Auth: React.FC = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const [value, setValue] = useState('');

    if (isAuth) {
        return <Redirect to='/chat'/>
    }

    const onClick = () => {
        if (value.length > 0) {
            dispatch(authActions.userNameChanged(value));
            dispatch(authActions.userIdChanged(v1()));
            dispatch(authActions.isAuthSwitched(true));
        }
    }

    return (
        <div className={styles.auth}>
            <div className={styles.auth__content}>
                <h2 className={styles.auth__header}>Planktonics Chat</h2>
                <p className={styles.auth__text}>Welcome in Planktonics Chat!</p>
                <p className={styles.auth__text}>Enter your name, please
                    <Input className={styles.auth__input} value={value} onChange={e => setValue(e.target.value)}/>
                </p>
                <div className={styles.auth__button}>
                    <Button onClick={onClick}>Submit</Button>
                </div>
            </div>
        </div>
    );
}