import React, { useState } from "react";
import styled from "styled-components";
import plusIcon from "../../images/plus.svg";

interface Props {
    onTitleTyped(text: any): void;
    onDescriptionTyped(text: any): void;
    onClickedSave(): void;
}
const MainContainer = styled.div`
    margin-left: 50px;
    h1 {
        width: 100%;
        font-size: 80px;
        font-family: 'Poppins', sans-serif;
        border-radius: 16%;
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

const PlusButton = styled.button`
    position: absolute;
    right: 10%;
    bottom: 10%;
    cursor: pointer;
    background: none;

    transition: transform .2s;

    :hover {
        transform: scale(1.02);
    }
    img {
        width: 150px;
    }
`;

const TitleField = styled.input`
    position: relative;
    font-size: 40px;
    height: 15px;
    width: 500px;
    padding: 30px;
    margin-top: 30px;
    border: 1px solid;
    border-radius: 20px;
    font-family:  'Poppins', sans-serif;
    margin-right: 40px;
    /* transition: transform .2s;
        :hover {
        transform: scale(1.1);
        } */
`;

const DescriptionField = styled.input`
    position: relative;
    font-size: 40px;
    height: 200px;
    width: 55%;
    padding: 30px;
    margin-top: 30px;
    border: 1px solid;
    border-radius: 20px;
    font-family:  'Poppins', sans-serif;
    margin-right: 40px;
    /* transition: transform .2s;
        :hover {
        transform: scale(1.01);
        } */
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export function CreatePackInputs(props: Props) {
    return (
        <>
            <MainContainer>
                <SaveButton onClick={() => props.onClickedSave()}>Save pack</SaveButton>
                <h1>Create a pack</h1>
                <TextContainer>                
                    <TitleField type="text" placeholder="Pack title" onChange={(event: any) => props.onTitleTyped(event.target.value)}></TitleField>
                    <DescriptionField type="text" placeholder="Pack description" onChange={(event: any) => props.onDescriptionTyped(event.target.value)}></DescriptionField>
                </TextContainer>
                {/* <Button onClick={() => props.onClicked()}>➕</Button> */}
                
            </MainContainer>
        </>
        
    );
}

