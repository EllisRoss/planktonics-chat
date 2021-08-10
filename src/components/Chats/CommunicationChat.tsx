import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Messages} from "../common/Messages/Messages";
import {AddMessageForm, FormValues} from "../common/AddMessageForm/AddMessageForm";
import {Message} from "../../types/types";
import styles from './Chat.module.css'
import {FormikHelpers} from "formik";
import {Divider} from "antd";
import {selectCommunicationMessages} from "../../redux/communicationChatSelectors";
import {communicationChatActions} from "../../redux/communicationChatReducer";
import {v1} from "uuid";
import {selectUserId, selectUserName} from "../../redux/authSelectors";

export const CommunicationChat: React.FC = () => {
    const messages = useSelector(selectCommunicationMessages);
    const userName = useSelector(selectUserName);
    const userId = useSelector(selectUserId);
    const dispatch = useDispatch();

    const sendMessage = (values: FormValues, {resetForm}: FormikHelpers<FormValues>) => {
        if (userName && userId) {
            const newMessage: Message = {
                userName: userName,
                message: values.msg,
                userId: userId,
                date: new Date(Date.now()),
                id: v1(),
            }
            dispatch(communicationChatActions.messageAdded(newMessage))
            resetForm({})
        }
    }

    const deleteMessage = (messageId: string) => {
        dispatch(communicationChatActions.messageDeleted(messageId))
    }
    const editMessage = (messageText: string ,messageId: string) => {
        dispatch(communicationChatActions.messageChanged(messageText, messageId));
    }

    return (
        <div>
            <h2 className={styles.chat__header}>Communication Chat</h2>
            <Messages messages={messages} editMessage={editMessage} deleteMessage={deleteMessage}/>
            <Divider/>
            <AddMessageForm sendMessage={sendMessage}/>
        </div>
    );
}