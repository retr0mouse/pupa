import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        value: false
    },
    reducers: {
        toggleLoggedIn: state => {
            state.value = !state.value
        } 
    }
})

export const getIsLoggedIn = (state: RootState) => state.login;
export const { toggleLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;
