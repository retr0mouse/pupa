import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
    initialWord: string;
    translatedWord: string;
}

const StyledCard = styled.div`
    /* width: 200px; */
    min-width: 250px;
    background: #EEEEEE;
    font-family: 'Poppins', sans-serif;
    color: black;
    border-radius: 15px;
    /* margin: 50px; */
    font-size: 30px;
    max-width: 200px;
    max-height: 500px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    /* box-shadow:  0 -25px 0 #4F4F4F; */
    border-bottom: 2rem solid #4F4F4F;

    p {
        padding: 2px 5px;   
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
`

const InitWord = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70%;
    border-bottom: 1.3px solid;
    direction: ltr;
    align-self: center;
`;

const Translate = styled.div`
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70%;
    border-top: 1.3px solid;
    direction: ltr;
    align-self: center;
`;

export function Card(props: Props): ReactElement {
    return (
        <StyledCard>
            <InitWord><p>{props.initialWord}</p></InitWord>
            <Translate><p>{props.translatedWord}</p></Translate>
        </StyledCard>
    );
}