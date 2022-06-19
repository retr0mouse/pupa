import React, { ReactElement, useState } from "react";
import styled from "styled-components";


interface Props {
    onTyped(query: any): void;
    onClicked(): void;
}

const InputBox = styled.div`
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-family: 'Open Sans', sans-serif;
        font-size: 44px;
    }

    label {
        font-family: 'Poppins', sans-serif;
        color: red;
        font-size: 30px;
        margin-left: 30px;
        margin-bottom: 10px;
        align-self: baseline;
    }
`;

const Button = styled.button`
    color:white;
    background: #C4C4C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 50%;
    width: fit-content;
    height: fit-content;
    font-size: 35px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    
    transition: transform .2s;

    :hover {
        transform: scale(1.2);
    }
`;

const TextField = styled.input`
    text-align: center;
    font-size: 30px;
    margin-right:30px;
    border: none;
    border-radius: 20px;
    font-family:  'Poppins', sans-serif;

    transition: transform .2s;
    :hover {
        transform: scale(1.1);
    }
    
`;

export function PackFindingBox(props: Props): ReactElement {
    const [startedTypingId, setStartedTypingId] = useState(false);
    const [id, setId] = useState("");

    return (
        <InputBox>
            <h1>Packs Finding Page</h1>                
            <label htmlFor="InitialWord">{id.length === 0 && startedTypingId ? "Please provide an id" : ""}</label>
            <div>
                <TextField type="text" placeholder="User id" onChange={(event: any) => {
                    props.onTyped(event?.target.value);
                    setId(event?.target.value);
                    setStartedTypingId(true);
                }}></TextField>
                <Button onClick={() => checkInputs() ? props.onClicked() : setStartedTypingId(true)}>🔎</Button>
            </div>
        </InputBox>
    );

    function checkInputs(): boolean {
        if (id.length === 0) return false;
        else return true;
    }
}
