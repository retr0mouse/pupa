import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "../components/NavigationBar";
import styled from "styled-components";
import {TextTyper} from "../components/TextTyper"
const TextTyper = styled.div`
  
`;
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
  position: absolute;
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
  cursor: pointer;\
  top:130px;
  right:230px;

  :active,
  :hover {
    outline: 0;
  }

  span {
    background-color: #6495ED;
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
    font-size: 100px;
    min-width: 196px;
  }

  transition: transform .2s;
        :hover {
            transform: scale(1.2);
      }
`;

const LoginButton = styled.button`
{
  position: absolute;
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
  top:330px;
  right:300px;
}

:active,
:hover {
  outline: 0;
}

span {
  background-color:#6495ED;
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
    font-size: 80px;
    min-width: 196px;
  }
}

transition: transform .2s;

:hover {
  transform: scale(1.2);
}
`;

const VerticalLine = styled.div`    // what the fuck
  border-left: 6px solid white;
    height: 11820px;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    top: 10;
`;
  


export function Home(): ReactElement{
    return(
        <>
            <Navigation
                link="/"
                enableRolesButton={false}
                enableLogoutButton={false}
            />
            <VerticalLine/>
            <TextTyper></TextTyper>
            <ButtonsContainer>
                <NavLink className="link" to="/register">
                    <RegisterButton><span className="text">Register</span></RegisterButton>
                </NavLink>
                <VerticalLine/>
                <NavLink className="link" to="/login">
                    <LoginButton><span className="text">Log in</span></LoginButton>
                </NavLink>
            </ButtonsContainer>
        </>
    );
}

