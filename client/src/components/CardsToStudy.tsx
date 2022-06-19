import React, { ReactElement } from "react";
import { FlashcardArray } from "react-quizlet-flashcard";
import styled from "styled-components"

interface Props {
    cards: any[];
}

const Text = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-size: 56px;
`;

export function CardsToStudy(props: Props): ReactElement {
    return (
        <>  
            {props.cards.length > 0 ? 
                <FlashcardArray
                    cards={props.cards.map((card: any, index: number) => {
                        return {
                            id: index,
                            front: card.initialWord,
                            back: card.translatedWord
                        }
                    })}
                ></FlashcardArray> 
                : 
                <Text>No cards in this pack</Text>
            }
        </>
    );
}