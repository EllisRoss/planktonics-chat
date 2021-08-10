import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionTypes} from "./store";
import {Message} from "../types/types";
import {v1} from "uuid";

const MESSAGES_CHANGED = 'planktonics_chat/business_chat/MESSAGES_CHANGED';
const MESSAGE_ADDED = 'planktonics_chat/business_chat/MESSAGE_ADDED';

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
            return _addMessage(state, action.newMessage)
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

const _addMessage = (state: InitialStateType, newMessage: Message): InitialStateType => {
    return {
        ...state,
        messages: [...state.messages, newMessage],
    }
}

export const businessChatActions = {
    messagesChanged: (newMessages: Message[]) => ({type: MESSAGES_CHANGED, newMessages} as const),
    messageAdded: (newMessage: Message) => ({type: MESSAGE_ADDED, newMessage} as const),
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