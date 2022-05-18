import React, { ReactElement, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { QuizAPI } from "../apis/QuizAPI";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import { QuizCreationBox } from "../components/QuizCreationBox";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    display: flex;
    flex-direction: column;

    p {
        font-size: 48px;
        font-family: 'Open Sans', sans-serif;
    }
`;
const RegisterButton = styled.button`
    width: 965px;
    height: 213px;

    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 94px;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const LoginButton = styled.button`
    width: 309px;
    height: 75px;

    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;

    color: #FFFFFF;
`;


export function Home(): ReactElement{
    return(
        <>
            <Navigation/>
            <ButtonsContainer>
                <NavLink to="/register">
                    <RegisterButton>Register</RegisterButton>
                </NavLink>
                <p>or</p>
                <NavLink to="/login">
                    <LoginButton>Log in</LoginButton>
                </NavLink>
            </ButtonsContainer>
        </>
    );
}

