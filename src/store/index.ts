import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./reducers/userReducer";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    userReducer: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
