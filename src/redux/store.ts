import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import businessChatReducer from "./businessChatReducer";
import communicationChatReducer from "./communicationChatReducer";
import authReducer from "./authReducer";

let rootReducer = combineReducers({
    businessChat: businessChatReducer,
    communicationChat: communicationChatReducer,
    auth: authReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type InferActionTypes<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never