import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectBusinessMessages} from "../../redux/businessChatSelectors";
import {Messages} from "../common/Messages";
import {AddMessageForm, FormValues} from "../common/AddMessageForm";
import {Message} from "../../types/types";
import {v1} from "uuid";
import {businessChatActions} from "../../redux/businessChatReducer";
import styles from './BusinessChat.module.css'

export const BusinessChat: React.FC = () => {
    const messages = useSelector(selectBusinessMessages);
    const dispatch = useDispatch();

    const sendMessage = (values: FormValues) => {
        const newMessage: Message = {
            userName: 'Mark',
            message: values.msg,
            userId: '12',
            date: new Date(Date.now()),
            id: v1(),
        }
        dispatch(businessChatActions.messageAdded(newMessage))
    }

    return (
        <div>
            <h2 className={styles.chat__header}>Business Chat</h2>
            <Messages messages={messages} />
            <AddMessageForm sendMessage={sendMessage}/>
        </div>
    );
}