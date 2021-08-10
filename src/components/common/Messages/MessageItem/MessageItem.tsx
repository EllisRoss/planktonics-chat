import React, {useState} from "react";
import {Message} from "../../../../types/types";
import {Button, Col, Input, Row, Space} from "antd";
import styles from "./MessageItem.module.css";
import {useSelector} from "react-redux";
import {selectUserId} from "../../../../redux/authSelectors";
import TextArea from "antd/lib/input/TextArea";

export const MessageItem: React.FC<MessagesListProps> = ({message, deleteMessage, editMessage}) => {
    const userId = useSelector(selectUserId)

    const [newTextMessage, setNewTextMessage] = useState(message.message);
    const [editMode, setEditMode] = useState(false);

    const messageTime = {
        hours: message.date.getHours(),
        minutes: message.date.getMinutes() < 10 ? '0' + message.date.getMinutes() : message.date.getMinutes(),
    }

    const onDelete = () => {
        deleteMessage(message.id)
    }

    const onSubmit = () => {
        setEditMode(false)
        if (newTextMessage.length > 0) {
            editMessage(newTextMessage, message.id)
        }
    }

    const onEdit = () => {
        setEditMode(true)
    }

    return (
        <div className={styles.message}>
            <Row>
                <Col flex={1} className={styles.message__username}>
                    <Space wrap>
                        {message.userName}
                        {
                            userId === message.userId &&
                            <Space wrap>
                                <Button size={"small"} onClick={onDelete}>delete</Button>
                                {!editMode &&
                                    <Button size={"small"} onClick={onEdit}>edit</Button>
                                }
                            </Space>
                        }
                    </Space>
                </Col>
                <Col flex={1} className={styles.message__time}>
                    {messageTime.hours}:{messageTime.minutes}
                </Col>
            </Row>
            <Row className={styles.message__text}>
                {!editMode && message.message}
                {editMode &&
                <div className={styles.message__edit}>
                    <TextArea className={styles.message__textarea}
                              autoSize value={newTextMessage}
                              onChange={e => setNewTextMessage(e.target.value)}/>
                    <Button size={"small"} onClick={onSubmit}>Submit</Button>
                </div>
                }
            </Row>
        </div>
    );
}

type MessagesListProps = {
    message: Message,
    deleteMessage: (messageId: string) => void,
    editMessage: (messageText: string, messageId: string) => void,
}