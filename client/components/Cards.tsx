import React, {ReactElement} from "react";
import styled from "styled-components";

interface Props {
    initWords: string[];
    transWords: string[];
}

const Card = styled.div`
    background-color: #C4C4C4;
    font-family: 'Poppins', sans-serif;
    border-radius: 15px;
    margin: 50px;
    padding: 50px;
    font-size: 25px;
    max-width: 100px;
    word-wrap: break-word;
`;

export function Cards(props: Props): ReactElement {
    return (
        <>
            {props.initWords?.map((word, index) => {
                return (
                    <Card>
                        <p>{word}</p>
                        <p>{props.transWords[index]}</p>
                    </Card>
                );
            })}
        </>
    );
} 