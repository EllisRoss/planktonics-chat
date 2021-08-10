import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Messages} from "../common/Messages/Messages";
import {AddMessageForm, FormValues} from "../common/AddMessageForm/AddMessageForm";
import {Message} from "../../types/types";
import styles from './CommunicationChat.module.css'
import {FormikHelpers} from "formik";
import {Divider} from "antd";
import {selectCommunicationMessages} from "../../redux/communicationChatSelectors";
import {communicationChatActions} from "../../redux/communicationChatReducer";
import { v1 } from "uuid";

export const CommunicationChat: React.FC = () => {
    const messages = useSelector(selectCommunicationMessages);
    const dispatch = useDispatch();

    console.log('fix me (CommunicationChat)')

    const sendMessage = (values: FormValues, {resetForm}: FormikHelpers<FormValues>) => {
        const newMessage: Message = {
            userName: 'Peter',
            message: values.msg,
            userId: '12',
            date: new Date(Date.now()),
            id: v1(),
        }
        dispatch(communicationChatActions.messageAdded(newMessage))
        resetForm({})
    }

    return (
        <div>
            <h2 className={styles.chat__header}>Business Chat</h2>
            <Messages messages={messages} />
            <Divider />
            <AddMessageForm sendMessage={sendMessage}/>
        </div>
    );
}