import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Quiz } from "../templates/Quiz";
import { RootState } from "./store";

const cardsSlice = createSlice({
    name: "cards",
    initialState: [] as Quiz[],
    reducers: {
        cardAdded: {
            reducer(state, action: PayloadAction<Quiz>) {
                state.push(action.payload);
            },
            prepare: (initialWord: string, translatedWord: string) => {
                return {
                    payload: {
                        id: nanoid(),
                        initialWord: initialWord,
                        translatedWord: translatedWord
                    } as Quiz
                }
            }
        },
        cardUpdated: {
            reducer(state, action: PayloadAction<Quiz>) {
                const existingCard = state.find(card => card.id === action.payload.id);
                if (existingCard) {
                    existingCard.initialWord = action.payload.initialWord;
                    existingCard.translatedWord = action.payload.translatedWord;
                }
            },
            prepare: (id, frontSide, backSide) => {
                return {
                    payload: {
                        id: id,
                        initialWord: frontSide,
                        translatedWord: backSide
                    }
                }
            }
        },
        // userLoggedIn: {
        //     reducer(state, action: PayloadAction<boolean>) {
        //         const isLogged = state.find(state);
        //     }
        // }
    }
})

export const { cardAdded, cardUpdated } = cardsSlice.actions;
export default cardsSlice.reducer;
export const selectAllCards = (state: RootState) => state.cards;
export const selectCardById = (state: RootState, cardId: string) => state.cards.find(card => card.id === cardId);
