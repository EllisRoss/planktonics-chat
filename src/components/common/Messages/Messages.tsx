import React, {useEffect, useRef, useState } from "react";
import {Message} from "../../../types/types";
import {MessageItem} from "./MessageItem/MessageItem";
import styles from './Messages.module.css'

export const Messages: React.FC<MessagesListProps> = ({messages, deleteMessage, editMessage}) => {

    const messagesList = messages.map(m => {
        return <MessageItem message={m} key={m.id}
                            deleteMessage={deleteMessage}
                            editMessage={editMessage}/>
    })

    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true);

    const scrollHandler = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = event.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) > 100) {
            isAutoScroll && setIsAutoScroll(false)
        } else {
            !isAutoScroll && setIsAutoScroll(true)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    },[messages]);

    return (
        <div className={styles.messages} onScroll={scrollHandler}>
            {messagesList}
            <div ref={messagesAnchorRef}></div>
        </div>
    );
}

type MessagesListProps = {
    messages: Message[],
    deleteMessage: (messageId: string) => void,
    editMessage: (messageText: string ,messageId: string) => void,
}