import {AppStateType} from "./store";
import {Message} from "../types/types";

export const selectBusinessMessages = (state: AppStateType): Message[] => {
    return state.businessChat.messages;
}