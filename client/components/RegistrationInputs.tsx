import React, { ReactElement } from "react";
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

    input {
        background: #FEFEFE;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        border: none;
        width: 515px;
        height: 80px;
        margin-bottom: 30px;
        font-size: 36px;
        padding-left: 22px;
    }

    button {
        width: 515px;
        height: 77px;
        background: #5B81E2;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        border: none;
        font-size: 50px;
        color: #F1F1F1;
        font-family: 'Poppins', sans-serif;
    }

    h1 {
        margin-top: 0;
        font-weight: 400;
        font-size: 70px;
    }
`;

interface Props {
    onUsernameTyped(event: any): void;
    onFirstnameTyped(event: any): void;
    onLastnameTyped(event: any): void;
    onEmailTyped(event: any): void;
    onBirthdateTyped(event: any): void;
    onPasswordTyped(event: any): void;
    onPasswordRepeatTyped(event: any): void;
    onClickedSubmit(): void
}

export function RegistraionInputs(props: Props): ReactElement {
    return (
        <InputsContainer>
            <h1>Register</h1>
            <input type="text" name="username" id="" placeholder="username" onChange={(event) => props.onUsernameTyped(event?.target.value)}/>
            <input type="text" name="firstname" id="" placeholder="firstname" onChange={(event) => props.onFirstnameTyped(event?.target.value)}/>
            <input type="text" name="lastname" id="" placeholder="lastname" onChange={(event) => props.onLastnameTyped(event?.target.value)}/>
            <input type="email" name="email" id="" placeholder="email" onChange={(event) => props.onEmailTyped(event?.target.value)}/>
            <input type="text" name="birthdate" id="" placeholder="birthdate" onChange={(event) => props.onBirthdateTyped(event?.target.value)}/>
            <input type="password" name="password" id="" placeholder="password" onChange={(event) => props.onPasswordTyped(event?.target.value)}/>
            <input type="password" name="password-repeat" placeholder="password again" id="" onChange={(event) => props.onPasswordRepeatTyped(event?.target.value)}/>
            <button onClick={() => props.onClickedSubmit()}>Submit</button>
        </InputsContainer>
    )
}