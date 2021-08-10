import React from "react";
import {Message} from "../../types/types";

export const MessageItem: React.FC<MessagesListProps> = ({message}) => {

    const messageTime = {
        hours: message.date.getHours(),
        minutes: message.date.getMinutes() < 10 ? '0' + message.date.getMinutes() : message.date.getMinutes(),
    }

    return (
        <div>
            <p>
                {message.userName}: {message.message} | {messageTime.hours}:{messageTime.minutes}
            </p>
        </div>
    );
}

type MessagesListProps = {
    message: Message,
}