import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionTypes} from "./store";
import {message} from "../types/types";

const MESSAGES_CHANGED = 'planktonics_chat/business_chat/MESSAGES_CHANGED';
const MESSAGE_ADDED = 'planktonics_chat/business_chat/MESSAGE_ADDED';

let initialState = {
    messages: [
        {id: '1', message: 'Hello', userName: 'Mark', userId: '12', date: new Date('December 17, 1995 03:24:00')}
    ] as message[],
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

const _setMessages = (state: InitialStateType, newMessages: message[]): InitialStateType => {
    return {
        ...state,
        messages: [...newMessages],
    }
}

const _addMessage = (state: InitialStateType, newMessage: message): InitialStateType => {
    return {
        ...state,
        messages: [...state.messages, newMessage],
    }
}

export const businessChatActions = {
    messagesChanged: (newMessages: message[]) => ({type: MESSAGES_CHANGED, newMessages} as const),
    messageAdded: (newMessage: message) => ({type: MESSAGE_ADDED, newMessage} as const),
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