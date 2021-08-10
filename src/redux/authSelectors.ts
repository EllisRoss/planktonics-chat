import {AppStateType} from "./store";

export const selectUserName = (state: AppStateType): string | null => {
    return state.auth.userName;
}

export const selectUserId = (state: AppStateType): string | null => {
    return state.auth.userId;
}

export const selectIsAuth = (state: AppStateType): boolean => {
    return state.auth.isAuth;
}