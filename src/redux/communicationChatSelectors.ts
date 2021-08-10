import {AppStateType} from "./store";
import {Message} from "../types/types";

export const selectCommunicationMessages = (state: AppStateType): Message[] => {
    return state.communicationChat.messages;
}