import React, { ReactElement, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { QuizAPI } from "../apis/QuizAPI";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import styled from "styled-components";
import { QuizCreationBox } from "../components/QuizCreationBox";


const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button {
        width: 500px;
        height: 150px;
        font-size: 50px;
        font-family: 'Poppins', sans-serif;
        border-radius: 20px;
        background-color: aquamarine;
    }
`;



export function StudentHome() {
    return (
        <QuizCreationBox 
            onTyped={() => null} 
            onClicked={() => null}
        ></QuizCreationBox>
    );
} 