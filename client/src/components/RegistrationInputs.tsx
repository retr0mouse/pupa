import React, { ReactElement, useState } from "react";
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
    margin: 50px;

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
const TextField = styled.input`
    position: relative;
    font-size: 30px;
    margin:30px;
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
    onFirstnameTyped(event: any): void;
    onLastnameTyped(event: any): void;
    onEmailTyped(event: any): void;
    onPasswordTyped(event: any): void;
    onPasswordRepeatTyped(event: any): void;
    onClickedSubmit(): void
}

export function RegistraionInputs(props: Props): ReactElement {
    const [username, setUsername] = useState("");
    const [usernameState, setUsernameState] = useState(true);
    const [firstname, setFirstname] = useState("");
    const [firstnameState, setFirstnameState] = useState(true);
    const [lastname, setLastname] = useState("");
    const [lastnameState, setLastnameState] = useState(true);
    const [email, setEmail] = useState("");
    const [emailState, setEmailState] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordState, setPasswordState] = useState(true);
    const [passwordAgain, setPasswordAgain] = useState("");

    
    return (
        <InputsContainer>
            <h1>Register</h1>
            <label htmlFor="username">{usernameState ? "" : "please provide a username"}</label>
            <TextField type="text" name="username" id="" placeholder="username" onChange={(event) => {
                props.onUsernameTyped(event?.target.value);
                event?.target.value.length > 0 ? setUsernameState(true) : setUsernameState(false);
                setUsername(event?.target.value);
            }}/>
            <label htmlFor="firstname">{firstnameState ? "" : "please provide a firstname"}</label>
            <TextField type="text" name="firstname" id="" placeholder="firstname" onChange={(event) => {
                props.onFirstnameTyped(event?.target.value);
                event?.target.value.length > 0 ? setFirstnameState(true) : setFirstnameState(false);
                setFirstname(event?.target.value);
            }}/>
            
            <label htmlFor="lastname">{lastnameState ? "" : "please provide a lastname"}</label>
            <TextField type="text" name="lastname" id="" placeholder="lastname" onChange={(event) => {
                props.onLastnameTyped(event?.target.value);
                event?.target.value.length > 0 ? setLastnameState(true) : setLastnameState(false);
                setLastname(event?.target.value);
            }}/>
            
            <label htmlFor="email">{emailState ? "" : "please provide an email"}</label>
            <TextField type="email" name="email" id="" placeholder="email" onChange={(event) => {
                props.onEmailTyped(event?.target.value);
                event?.target.value.length > 0 ? setEmailState(true) : setEmailState(false);
                setEmail(event?.target.value);
            }}/>
            <label htmlFor="password">{passwordState ? "" : "please provide a password"}</label>
            <TextField type="password" name="password" id="" placeholder="password" onChange={(event) => {
                props.onPasswordTyped(event?.target.value);
                event?.target.value.length > 0 ? setPasswordState(true) : setPasswordState(false);
                setPassword(event?.target.value);
            }}/>
            <label htmlFor="password-repeat">{password != passwordAgain && password.length == passwordAgain.length ? "passwords do not match" : ""}</label>
            <TextField type="password" name="password-repeat" placeholder="password again" id="" onChange={(event) => {
                props.onPasswordRepeatTyped(event?.target.value);
                setPasswordAgain(event?.target.value);
            }}/>
            <button onClick={() => checkInputs() ? props.onClickedSubmit() : ""}>Submit</button>
        </InputsContainer>
    )

    function checkInputs(): boolean {
        let isFilled = true;
        if (username.length == 0) {
            setUsernameState(false);
            isFilled = false;
        }
        if (lastname.length == 0) {
            setLastnameState(false);
            isFilled = false;
        }
        if (firstname.length == 0) {
            setFirstnameState(false);
            isFilled = false;
        }
        if (email.length == 0) {
            setEmailState(false);
            isFilled = false;
        }
        if (password.length == 0) {
            setPasswordState(false);
            isFilled = false;
        }
        if (passwordAgain.length == 0) {
            isFilled = false;
        }
        return isFilled;
    }
}