import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type StateProp = {
    count1: number,
};

const initialValue: StateProp = {
    count1: 0,
}

const appSlice = createSlice({
    name: 'app',
    initialState: initialValue,
    reducers: {
        add: (state) => {
            state.count1++;
        },
        remove: (state) => {
            state.count1--;
        },
        reset: (state) => {
            state.count1 = 0;
        }
    },
});

export const appSelector = (state: RootState) => state.appReducer;
export const { add, remove, reset } = appSlice.actions
export default appSlice.reducer;