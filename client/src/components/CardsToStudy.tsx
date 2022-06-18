import React, { ReactElement } from "react";
import { FlashcardArray } from "react-quizlet-flashcard";

interface Props {
    cards: any[];
}

export function CardsToStudy(props: Props): ReactElement {
    return (
        <>
            <FlashcardArray
                cards={props.cards.map((card: any, index: number) => {
                    return {
                        id: index,
                        front: card.initialWord,
                        back: card.translatedWord
                    }
                })}
            ></FlashcardArray>
        </>
    );
}