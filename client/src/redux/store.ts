import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice";
import noticeReducer from "./noticeSlice";
import loginReducer from "./loginSlice";


const store = configureStore({
    reducer: {
        cards: cardsReducer,
        notice: noticeReducer,
        login: loginReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;