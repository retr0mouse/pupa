import React, { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const InputsContainer = styled.div`
    align-self: center;
    width: max-content;
    padding: 50px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 70px;
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
        cursor:pointer;
        width: 515px;
        height: 77px;
        background: #5B81E2;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        border: none;
        font-size: 50px;
        color: #F1F1F1;
        font-family: 'Poppins', sans-serif;

        transition: transform .2s;
        :hover {
        transform: scale(1.2);
        }
    }
    h1 {
        margin-top: 0;
        font-weight: 400;
        font-size: 70px;
        font-family: 'Poppins', sans-serif;
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

    
    return (
        <InputsContainer>
            <h1>Login</h1>
    
            <label htmlFor="username">{usernameState ? "" : "please provide a username"}</label>
            <input type="text" name="username" id="" placeholder="username" onChange={(event) => {
                props.onUsernameTyped(event?.target.value);
                event?.target.value.length > 0 ? setUsernameState(true) : setUsernameState(false);
                setUsername(event?.target.value);
            }}/>
            <label htmlFor="password">{passwordState ? "" : "please provide a password"}</label>
            <input type="password" name="password" id="" placeholder="password" onChange={(event) => {
                props.onPasswordTyped(event?.target.value);
                event?.target.value.length > 0 ? setPasswordState(true) : setPasswordState(false);
                setPassword(event?.target.value);
            }}/>
            <button onClick={() => checkInputs() ? props.onClickedSubmit() : ""}>Submit</button>
        </InputsContainer>
    )

    function checkInputs(): boolean {
        let isFilled = true;
        if (username.length <= 0) {
            setUsernameState(false);
            isFilled = false;
        }
        if (password.length <= 0) {
            setPasswordState(false);
            isFilled = false;
        }
        return isFilled;
    }
}