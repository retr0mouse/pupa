import React, { useState } from "react";
import styled from "styled-components";

interface Props {
    onTitleTyped(text: any): void;
    onDescriptionTyped(text: any): void;
    onClickedSave(): void;
}
const MainContainer = styled.div`
    margin-left: 50px;
    h1 {
        font-family: 'Open Sans', sans-serif;
        font-size: 44px;
    }
`;
const SaveButton = styled.button`
    position: relative;
    bottom: 69%;
    left: 80%;
    margin-top: 20px;
    width: 250px;
    height: 75px;
    transition: transform .2s;

    :hover {
        transform: scale(1.02);
    }
    
    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;
    cursor: pointer;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 47px;

    color: #FFFFFF;
`;

const TitleField = styled.input`
    position: relative;
    font-size: 36px;
    height: 15px;
    width: 500px;
    padding: 30px;
    margin-top: 30px;
    border: none;
    border-radius: 20px;
    font-family:  'Poppins', sans-serif;
    margin-right: 40px;
    /* transition: transform .2s;
        :hover {
        transform: scale(1.1);
        } */
`;

const DescriptionField = styled.textarea`
    position: relative;
    font-size: 36px;
    height: 150px;
    width: 55%;
    padding: 30px;
    margin-top: 30px;
    border: none;
    border-radius: 20px;
    font-family:  'Poppins', sans-serif;
    margin-right: 40px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        font-family: 'Poppins', sans-serif;
        color: red;
        font-size: 30px;
        margin-bottom: 10px;
    }
`;

export function CreatePackInputs(props: Props) {
    const [startedTypingTitle, setStartedTypingTitle] = useState(false);
    const [title, setTitle] = useState("");
    
    return (
        <>
            <MainContainer>
                <SaveButton onClick={() => checkInputs() ? props.onClickedSave() : setStartedTypingTitle(true)}>Save pack</SaveButton>
                <h1>Create a pack</h1>
                <TextContainer>                
                    <label htmlFor="InitialWord">{title.length === 0 && startedTypingTitle ? "please provide a title" : ""}</label>
                    <TitleField type="text" placeholder="Pack title" onChange={(event: any) => {
                        props.onTitleTyped(event?.target.value);
                        setTitle(event?.target.value);
                        setStartedTypingTitle(true);
                    }}></TitleField>
                    <DescriptionField placeholder="Pack description" onChange={(event: any) => props.onDescriptionTyped(event?.target.value)}></DescriptionField>
                </TextContainer>                
            </MainContainer>
        </>
    );

    function checkInputs(): boolean {
        if (title.length === 0) return false;
        else return true;
    }
}

