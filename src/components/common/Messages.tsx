import React from "react";
import {Message} from "../../types/types";
import {MessageItem} from "./Message";

export const Messages: React.FC<MessagesListProps> = ({messages}) => {

    const messagesList = messages.map(m => {
        return <MessageItem message={m} key={m.id} />
    })

    return (
        <div>
            {messagesList}
        </div>
    );
}

type MessagesListProps = {
    messages: Message[],
}