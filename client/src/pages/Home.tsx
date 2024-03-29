import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "../components/NavigationBar";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    position: relative;
    left: 50%;
    /* top: 50%; */
    transform: translate(-50%, 50%);
    align-items: center;
    display: flex;
    flex-direction: column;

    .link {
        margin-top: 50px;
    }

    p {
        font-size: 48px;
        font-family: 'Open Sans', sans-serif;
    }
`;
const RegisterButton = styled.button`
    width: 965px;
    height: 213px;

    transition: transform .2s;
    :hover {
        transform: scale(1.2);
    }

    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 94px;
    cursor: pointer;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const LoginButton = styled.button`
    width: 309px;
    height: 75px;

    transition: transform .2s;
    :hover {
        transform: scale(1.2);
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


export function Home(): ReactElement{
    return(
        <>
            <Navigation
                link="/"
                enableRolesButton={false}
                enableLogoutButton={false}
            />
            <ButtonsContainer>
                <NavLink className="link" to="/register">
                    <RegisterButton>Register</RegisterButton>
                </NavLink>
                <NavLink className="link" to="/login">
                    <LoginButton>Log in</LoginButton>
                </NavLink>
            </ButtonsContainer>
        </>
    );
}

