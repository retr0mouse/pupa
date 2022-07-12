import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Card {
    id: string,
    initWord: string,
    transWord: string
}

const cardsSlice = createSlice({
    name: "cards",
    initialState: [] as Card[],
    reducers: {
        cardAdded: {
            reducer(state, action: PayloadAction<Card>) {
                state.push(action.payload);
            },
            prepare: (initialWord: string, translatedWord: string) => {
                return {
                    payload: {
                        id: nanoid(),
                        initWord: initialWord,
                        transWord: translatedWord
                    }
                }
            }
        }
    }
})

export const { cardAdded } = cardsSlice.actions;
export default cardsSlice.reducer;
export const selectAllCards = (state: RootState) => state.cards;
export const selectCardById = (state: RootState, cardId: string) => state.cards.find(card => card.id === cardId);
