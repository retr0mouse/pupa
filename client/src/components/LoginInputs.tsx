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
        cursor:pointer;
        width: 515px;
        height: 77px;
        background: linear-gradient(109.32deg, #2054DB 12.52%, rgba(0, 0, 0, 0) 62.98%), #FF0000;

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
                <button onClick={() => checkInputs() ? props.onClickedSubmit() : dispatch(noticeSetted("notice me daddy"))}>Submit</button>
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