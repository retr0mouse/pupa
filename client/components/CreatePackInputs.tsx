import React from "react";
import styled from "styled-components";
import plusIcon from "../images/plus.svg";
import { PopupDialog } from "./PopupDialog";

interface Props {
    onTitleTyped(text: any): void;
    onDescriptionTyped(text: any): void;
    onClickedSave(): void;
    onClickedPlus(): void;
    quizzes: any[];
}
const MainContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    display: flex;
    flex-direction: column;

    h1 {
        background-color: #c4c4c4;
        width: fit-content;
        font-size: 80px;
        font-family: 'Open-Sans', sans-serif;
    }
`;
const SaveButton = styled.button`
    margin-top: 20px;
    width: 500px;
    height: 75px;

    transition: transform .2s;
    :hover {
        transform: scale(1.05);
    }
    
    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;
    cursor: pointer;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;

    color: #FFFFFF;
`;

const PlusButton = styled.button`
    position: absolute;
    right: 10%;
    bottom: 10%;
    cursor: pointer;
    background: none;

    transition: transform .2s;

    :hover {
        transform: scale(1.05);
    }
    img {
        width: 150px;
    }
`;

const TextField = styled.input`
    font-size: 40px;
`;

export function CreatePackInputs(props: Props) {
    return (
        <>
            <MainContainer>
                <h1>Create a pack</h1>
                <TextField type="text" placeholder="Pack title" onChange={(event) => props.onTitleTyped(event.target.value)}></TextField>
                <TextField type="text" placeholder="Pack description" onChange={(event) => props.onDescriptionTyped(event.target.value)}></TextField>
                {/* <Button onClick={() => props.onClicked()}>➕</Button> */}
                <SaveButton onClick={() => props.onClickedSave()}>Save pack</SaveButton>
                {props.quizzes}
            </MainContainer>
            {/* <PlusButton onClick={() => props.onClickedPlus()}><img src={plusIcon}></img></PlusButton> */}
            <PopupDialog
                image={plusIcon}
            ></PopupDialog>
        </>
        
    );
}