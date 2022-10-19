import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "../components/NavigationBar";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);
    align-items: center;
    display: flex;
    flex-direction: column;

    .link {
        margin-top: 25px;
        text-decoration:none;
    }

    p {
        font-size: 48px;
        font-family: 'Open Sans', sans-serif;
    }
`;
const RegisterButton = styled.button`
    {
        align-items: center;
        background-image: linear-gradient(to right, #eecda3, #ef629f);
        border: 0;
        border-radius: 8px;
        box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
        box-sizing: border-box;
        color: #FFFFFF;
        display: flex;
        font-family: Phantomsans, sans-serif;
        font-size: 20px;
        justify-content: center;
        line-height: 1em;
        max-width: 100%;
        min-width: 140px;
        padding: 3px;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        cursor: pointer;
      }
      
      :active,
      :hover {
        outline: 0;
      }
      
      span {
        background-color: rgb(5, 6, 45);
        padding: 16px 24px;
        border-radius: 6px;
        width: 100%;
        height: 100%;
        transition: 300ms;
        underline: none;
      }
      
      :hover span {
        background: none;
        underline: none;
      }
      
      @media (min-width: 768px) {
      {
          font-size: 24px;
          min-width: 196px;
        }
      }
      
      transition: transform .2s;
           :hover {
               transform: scale(1.2);
          }
`;

const LoginButton = styled.button`
{
  align-items: center;
  background-image: linear-gradient(to right, #eecda3, #ef629f);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

:active,
:hover {
  outline: 0;
}

span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
  underline: none;
}

:hover span {
  background: none;
  underline: none;
}

@media (min-width: 768px) {
{
    font-size: 24px;
    min-width: 196px;
  }
}

transition: transform .2s;
     :hover {
         transform: scale(1.2);
    }
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
                    <RegisterButton><span className="text">Register</span></RegisterButton>
                </NavLink>
                <NavLink className="link" to="/login">
                    <LoginButton><span className="text">Log in</span></LoginButton>
                </NavLink>
            </ButtonsContainer>
        </>
    );
}

