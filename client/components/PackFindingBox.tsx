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
    color:white;
    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;
    width: 300px;
    height: 50px;
    font-size: 35px;
    cursor: pointer;
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
            <Button onClick={(query) => props.onClicked(query)}>Find pack</Button>
        </InputBox>
    );
}
