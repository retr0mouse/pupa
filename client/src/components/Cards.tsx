import React, {ReactElement} from "react";
import styled from "styled-components";

interface Props {
    initWords: string[];
    transWords: string[];
}

const Card = styled.div`
    width: 200px;
    background: #5B81E2;
    font-family: 'Poppins', sans-serif;
    color:white;
    border-radius: 15px;
    margin: 50px;
    font-size: 30px;
    max-width: 200px;
    max-height: 500px;
    border: 1px solid;
    white-space: nowrap;
    p {
        padding: 2px 5px;   
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
 const InitWord = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: auto;
    border-bottom: 1px solid;
    direction: ltr;
    align-self: center;
 `;

 const Translate = styled.div`
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: auto;
    border-top: 1px solid;
    direction: ltr;
    align-self: center;
 `;

export function Cards(props: Props): ReactElement {
    return (
        <>
            {props.initWords?.map((word, index) => {
                return (
                    <Card>
                        <InitWord><p>{word}</p></InitWord>
                        <Translate><p>{props.transWords[index]}</p></Translate>
                    </Card>
                );
            })}
        </>
    );
} 