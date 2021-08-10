import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectBusinessMessages} from "../../redux/businessChatSelectors";
import {Messages} from "../common/Messages/Messages";
import {AddMessageForm, FormValues} from "../common/AddMessageForm/AddMessageForm";
import {Message} from "../../types/types";
import {v1} from "uuid";
import {businessChatActions} from "../../redux/businessChatReducer";
import styles from './Chat.module.css'
import {FormikHelpers} from "formik";
import {Divider} from "antd";
import {selectUserId, selectUserName} from "../../redux/authSelectors";

export const BusinessChat: React.FC = () => {
    const messages = useSelector(selectBusinessMessages);
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
            dispatch(businessChatActions.messageAdded(newMessage))
            resetForm({})
        }
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