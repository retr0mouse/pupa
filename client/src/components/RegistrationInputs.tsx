import React, { ReactElement, useState } from "react";
import styled from "styled-components"

const InputsContainer = styled.div`
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 1000px;
    border-radius: 5px;
    background-color: #6495ED;
    display: flex;\

    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 20px;
    margin-top:50px;
    box-shadow: 15px 15px 11px rgba(0, 0, 0, 0.25);

    input {
        background: #FEFEFE;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        border: none;
        width: 360px;
        height: 65px;
        margin-bottom: 10px;
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
        margin: 15px;
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

    div {
        width: fit-content;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    h1 {
        margin-top: 0;
        margin-bottom: 0px;
        font-weight: 600;
        font-size: 80px;
        font-family: 'Poppins', sans-serif;
        color: rgb(34, 79, 140);
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

    .icon {
        padding: 10px;
        background: dodgerblue;
        color: white;
        min-width: 50px;
        text-align: center;
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
            <div>
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
            </div>
           
            <button onClick={() => checkInputs() ? props.onClickedSubmit() : ""}><span className="text">Submit</span></button>
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