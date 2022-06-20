import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../apis/UserAPI";
import { ErrorMessage } from "../components/ErrorMessage";
import { Navigation } from "../components/NavigationBar";
import { RegistraionInputs } from "../components/RegistrationInputs";
import { SuccessMessage } from "../components/SuccessMessage";

export function Registration(): ReactElement {
    const [username, setUsername] = useState("") as any;
    const [firstname, setFirstname] = useState("") as any;
    const [lastname, setLastname] = useState("") as any;
    const [email, setEmail] = useState("") as any;
    const [password, setPassword] = useState("") as any; 
    const [passwordRepeat, setPasswordRepeat] = useState("") as any;
    const [errorNotice, setErrorNotice] = useState("") as any;
    const [successNotice, setSuccessNotice] = useState("") as any;
    const [isSuccessfull, setIsSuccessfull] = useState(false);
    const history = useNavigate();
    
    useEffect(() => {
        if (!successNotice) {
            return;
        }
        const timeout = setTimeout(() => setSuccessNotice(""), 2000);
        return () => {
            clearTimeout(timeout);
            isSuccessfull ? history("/") : null;
        };
    }, [successNotice])
    
    return (
        <>
            <Navigation
                link="/"
                enableRolesButton={false}
                enableLogoutButton={false}
            />
            <RegistraionInputs
                onUsernameTyped={(username) => setUsername(username)}
                onFirstnameTyped={(firstname) => setFirstname(firstname)}
                onLastnameTyped={(lastname) => setLastname(lastname)}
                onEmailTyped={(email) => setEmail(email)}
                onPasswordTyped={(password) => setPassword(password)}
                onPasswordRepeatTyped={(passwordRepeat) => setPasswordRepeat(passwordRepeat)}
                onClickedSubmit={() => RegisterUser()}
            ></RegistraionInputs>
            <ErrorMessage 
                message={errorNotice} 
            ></ErrorMessage>   
            <SuccessMessage
                message={successNotice}
            ></SuccessMessage>             
        </>
    );

    async function RegisterUser() {
        if (username.length > 0 && email.length > 0 && password.length > 0 && firstname.length > 0 && lastname.length > 0 && passwordRepeat.length > 0) {
            try { 
                await UserAPI.registerUser(username, email, firstname, lastname, password); 
            } catch (error) {
                setIsSuccessfull(false);
                setSuccessNotice("Registration " + error);
                return;
            }
            setIsSuccessfull(true);
            setSuccessNotice("Registration successful!");    
        }
        else {
            setErrorNotice("Please provide the needed data");
        }
        return;
    }
}