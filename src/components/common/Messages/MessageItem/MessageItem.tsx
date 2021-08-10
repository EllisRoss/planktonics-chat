import React from "react";
import {Message} from "../../../../types/types";
import {Col, Row} from "antd";
import styles from "./MessageItem.module.css";

export const MessageItem: React.FC<MessagesListProps> = ({message}) => {

    const messageTime = {
        hours: message.date.getHours(),
        minutes: message.date.getMinutes() < 10 ? '0' + message.date.getMinutes() : message.date.getMinutes(),
    }

    return (
        <div className={styles.message}>
            <Row>
                <Col flex={1} className={styles.message__username}>
                    {message.userName}
                </Col>
                <Col flex={1} className={styles.message__time}>
                    {messageTime.hours}:{messageTime.minutes}
                </Col>
            </Row>
            <Row className={styles.message__text}>
                {message.message}
            </Row>
        </div>
    );
}

type MessagesListProps = {
    message: Message,
}