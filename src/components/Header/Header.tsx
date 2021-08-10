import {Col, Row } from 'antd';
import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__navbar}>
                <Row>
                    <Col className={styles.header__business} flex={1}>
                        <NavLink activeClassName={styles.active} to='/business'>
                            <b>Business chat</b>
                        </NavLink>
                    </Col>
                    <Col className={styles.header__communication} flex={1}>
                        <NavLink activeClassName={styles.active} to='/communication'>
                            <b>Communication chat</b>
                        </NavLink>
                    </Col>
                </Row>
            </div>
        </header>
    );
}
