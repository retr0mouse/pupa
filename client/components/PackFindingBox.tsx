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
   position: relative;
    font-size: 30px;
    margin:30px;
    border: 1px solid;
    border-radius: 20px;
    font-family:  'Poppins', sans-serif;

    transition: transform .2s;
    :hover {
        transform: scale(1.1);
    }
`;

export function PackFindingBox(props: Props): ReactElement {
    return (
        <InputBox>
            <TextField type="text" placeholder="Pack id number" onChange={(event) => props.onTyped(event)}></TextField>
            <br/>
            <Button onClick={(query) => props.onClicked(query)}>Find quiz</Button>
        </InputBox>
    );
}
