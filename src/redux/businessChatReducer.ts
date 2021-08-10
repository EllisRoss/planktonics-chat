import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionTypes} from "./store";
import {Message} from "../types/types";
import {v1} from "uuid";

const MESSAGES_CHANGED = 'planktonics_chat/business_chat/MESSAGES_CHANGED';
const MESSAGE_ADDED = 'planktonics_chat/business_chat/MESSAGE_ADDED';
const MESSAGE_DELETED = 'planktonics_chat/business_chat/MESSAGE_DELETED';
const MESSAGE_CHANGED = 'planktonics_chat/business_chat/MESSAGE_CHANGED';

let initialState = {
    messages: [
        {id: v1(), message: 'Hi everyone', userName: 'John', userId: v1(), date: new Date(Date.now())},
        {id: v1(), message: 'Is it a flood chat?', userName: 'John', userId: v1(), date: new Date(Date.now())},
        {id: v1(), message: 'Hi, yes', userName: 'Peter', userId: v1(), date: new Date(Date.now() + 10000)},
    ] as Message[],
};

const businessChatReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case MESSAGES_CHANGED:
            return _setMessages(state, action.newMessages);
        case MESSAGE_ADDED:
            return _addMessage(state, action.newMessage);
        case MESSAGE_DELETED:
            return _deleteMessage(state, action.messageId);
        case MESSAGE_CHANGED:
            return _setMessage(state, action.messageText, action.messageId);
        default:
            return state;
    }
}

const _setMessages = (state: InitialStateType, newMessages: Message[]): InitialStateType => {
    return {
        ...state,
        messages: [...newMessages],
    }
}

const _setMessage = (state: InitialStateType, messageText: string, messageId: string): InitialStateType => {
    const newMessages = state.messages.map(m => {
        if (m.id === messageId) {
            m.message = messageText
        }
        return m;
    })

    return {
        ...state,
        messages: [...newMessages],
    }
}

const _deleteMessage = (state: InitialStateType, messageId: string): InitialStateType => {
    const newMessages = state.messages.filter(m => {
        return m.id !== messageId;
    })

    return {
        ...state,
        messages: [...newMessages],
    }
}

const _addMessage = (state: InitialStateType, newMessage: Message): InitialStateType => {
    return {
        ...state,
        messages: [...state.messages, newMessage],
    }
}

export const businessChatActions = {
    messagesChanged: (newMessages: Message[]) => ({type: MESSAGES_CHANGED, newMessages} as const),
    messageAdded: (newMessage: Message) => ({type: MESSAGE_ADDED, newMessage} as const),
    messageDeleted: (messageId: string) => ({type: MESSAGE_DELETED, messageId} as const),
    messageChanged: (messageText: string, messageId: string) => (
        {type: MESSAGE_CHANGED, messageText, messageId} as const
    ),
}

// export const setInitializedThunkCreator = (): ThunkType =>
//     async (dispatch) => {
//         await dispatch(getAuthUserDataThunkCreator());
//         dispatch(AppActions.initializedSuccess());
//     }

export default businessChatReducer;

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof businessChatActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;