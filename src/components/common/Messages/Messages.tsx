import React from "react";
import {Message} from "../../../types/types";
import {MessageItem} from "./MessageItem/MessageItem";
import styles from './Messages.module.css'

export const Messages: React.FC<MessagesListProps> = ({messages}) => {

    const messagesList = messages.map(m => {
        return <MessageItem message={m} key={m.id} />
    })

    return (
        <div className={styles.messages}>
            {messagesList}
        </div>
    );
}

type MessagesListProps = {
    messages: Message[],
}