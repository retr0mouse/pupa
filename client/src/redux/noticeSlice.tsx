import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const noticeSlice = createSlice({
    name: "notice",
    initialState: "",
    reducers: {
        noticeSetted: {
            reducer(state, action: PayloadAction<string>) {
                state = (action.payload);
            },
            prepare: (message: string) => {
                return {
                    payload: message
                }
            }
        }
    }
})

export const getNotice = (state: RootState) => state.notice;
export const { noticeSetted } = noticeSlice.actions;
export default noticeSlice.reducer;
