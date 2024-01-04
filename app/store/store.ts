import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import AppReducer from "./slices/appSlice";

export const store = configureStore({
    reducer: { appReducer: AppReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();