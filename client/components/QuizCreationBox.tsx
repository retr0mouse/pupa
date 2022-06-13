import React, { ReactElement } from "react";
import styled from "styled-components";


interface Props {
    onTyped(query: any): void;
    onClicked(event: any): void;
}

const InputBox = styled.div`
    text-align: center;
    text-align-last: center;
`;

const Button = styled.button`
    margin-top: 10px;
    font-size: 30px;
    background-color: #5B81E2;
    border-radius: 16px;
    font-family: 'Poppins', sans-serif;
    
    transition: transform .2s;

    :hover {
        transform: scale(1.2);
    }
`;

const TextField = styled.input`
    font-size: 40px;
    border-radius: 20px;
`;

export function QuizCreationBox(props: Props): ReactElement {
    return (
        <InputBox>
            <TextField type="text" placeholder="Pack id number" onChange={(event) => props.onTyped(event)}></TextField>
            <br/>
            <Button onClick={(query) => props.onClicked(query)}>Find quiz</Button>
        </InputBox>
    );
}
