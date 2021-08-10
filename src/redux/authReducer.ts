import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionTypes} from "./store";

const USER_NAME_CHANGED = 'planktonics_chat/auth/USER_NAME_CHANGED';
const USER_ID_CHANGED = 'planktonics_chat/auth/USER_ID_CHANGED';
const IS_AUTH_SWITCHED = 'planktonics_chat/auth/IS_AUTH_SWITCHED';

let initialState = {
    userName: null as null | string,
    userId: null as null | string,
    isAuth: false,
};

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case USER_NAME_CHANGED:
            return _setUserName(state, action.newUserName);
        case USER_ID_CHANGED:
            return _setUserId(state, action.newUserId);
        case IS_AUTH_SWITCHED:
            return _toggleIsAuth(state, action.toggleVal);
        default:
            return state;
    }
}

const _setUserName = (state: InitialStateType, newUserName: string): InitialStateType => {
    return {
        ...state,
        userName: newUserName,
    }
}
const _setUserId = (state: InitialStateType, newUserId: string): InitialStateType => {
    return {
        ...state,
        userId: newUserId,
    }
}
const _toggleIsAuth = (state: InitialStateType, toggleVal: boolean): InitialStateType => {
    return {
        ...state,
        isAuth: toggleVal,
    }
}

export const authActions = {
    userNameChanged: (newUserName: string) => ({type: USER_NAME_CHANGED, newUserName} as const),
    userIdChanged: (newUserId: string) => ({type: USER_ID_CHANGED, newUserId} as const),
    isAuthSwitched: (toggleVal: boolean) => ({type: IS_AUTH_SWITCHED, toggleVal} as const),
}

// export const setInitializedThunkCreator = (): ThunkType =>
//     async (dispatch) => {
//         await dispatch(getAuthUserDataThunkCreator());
//         dispatch(AppActions.initializedSuccess());
//     }

export default authReducer;

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof authActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;