import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { noticeSetted } from "../redux/noticeSlice";

const InputsContainer = styled.div`
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: max-content;
    padding: 50px;
    border-radius: 5px;
    background-color: #6495ED;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    margin-top: 50px;
    box-shadow: 15px 15px 11px rgba(0, 0, 0, 0.25);
    
    input {
        background: #FEFEFE;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        border: none;
        width: 515px;
        height: 80px;
        margin-bottom: 30px;
        font-size: 28px;
        padding-left: 22px;
        font-family: 'Open Sans', sans-serif;

        transition: transform .2s;
        :hover {
        transform: scale(1.1);
        }
    }
    label {
        color: red;
    }
    button {
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
        line-height: 50px;
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
          font-size: 40px;
          min-width: 196px;
        }
      }
      
      transition: transform .2s;
           :hover {
               transform: scale(1.2);
          }
    }
    h1 {
        margin-top: 0;
        font-weight: 600;
        font-size: 80px;
        font-family: 'Poppins', sans-serif;
        color:rgb(34, 79, 140);
    }
`;

const TextField = styled.input`
    position: relative;
    font-size: 30px;
    margin: 30px;
    border: 1px solid;
    border-radius: 20px;
    font-family:  'Poppins', sans-serif;

    transition: transform .2s;
    :hover {
        transform: scale(1.1);
    }
`;

interface Props {
    onUsernameTyped(event: any): void;
    onPasswordTyped(event: any): void;
    onClickedSubmit(): void
}

export function LoginInputs(props: Props): ReactElement {
    const [username, setUsername] = useState("");
    const [usernameState, setUsernameState] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordState, setPasswordState] = useState(true);

    const dispatch = useDispatch();

    return (
        <>
            <InputsContainer>
                <h1>Login</h1>
                <label htmlFor="username">{usernameState ? "" : "please provide a username"}</label>
                <TextField type="text" name="username" id="" placeholder="username" onChange={(event: any) => {
                    props.onUsernameTyped(event?.target.value);
                    event?.target.value.length > 0 ? setUsernameState(true) : setUsernameState(false);
                    setUsername(event?.target.value);
                }}/>
                <label htmlFor="password">{passwordState ? "" : "please provide a password"}</label>
                <TextField type="password" name="password" id="" placeholder="password" onChange={(event: any) => {
                    props.onPasswordTyped(event?.target.value);
                    event?.target.value.length > 0 ? setPasswordState(true) : setPasswordState(false);
                    setPassword(event?.target.value);
                }}/>
                <button onClick={() => checkInputs() ? props.onClickedSubmit() : dispatch(noticeSetted("notice me daddy"))}><span className="text">Submit</span></button>
            </InputsContainer>
        </>
    )

    function checkInputs(): boolean {
        let isFilled = true;
        if (username.length === 0) {
            setUsernameState(false);
            isFilled = false;
        }
        if (password.length === 0) {
            setPasswordState(false);
            isFilled = false;
        }
        return isFilled;
    }
}