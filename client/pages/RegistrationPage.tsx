import React, { ReactElement, useEffect, useState } from "react";
import { UserAPI } from "../apis/UserAPI";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import { RegistraionInputs } from "../components/RegistrationInputs";

export function RegistrationPage(): ReactElement {
    const [username, setUsername] = useState("") as any;
    const [firstname, setFirstname] = useState("") as any;
    const [lastname, setLastname] = useState("") as any;
    const [email, setEmail] = useState("") as any;
    const [password, setPassword] = useState("") as any; 
    const [passwordRepeat, setPasswordRepeat] = useState("") as any;
    const [notice, setNotice] = useState("") as any;
    
    useEffect(() => {
        if (!notice) {
            return;
        }
        const timeout = setTimeout(() => setNotice(""), 2000);
        return () => {
            clearTimeout(timeout);
        };
    }, [notice])
    
    return (
        <>
            <Navigation/>
            <RegistraionInputs
                onUsernameTyped={(username) => setUsername(username)}
                onFirstnameTyped={(firstname) => setFirstname(firstname)}
                onLastnameTyped={(lastname) => setLastname(lastname)}
                onEmailTyped={(email) => setEmail(email)}
                onPasswordTyped={(password) => setPassword(password)}
                onPasswordRepeatTyped={(passwordRepeat) => setPasswordRepeat(passwordRepeat)}
                onClickedSubmit={() => RegisterUser()}
            ></RegistraionInputs>
            <Message 
                message={notice} 
                updateMessage={() => setNotice()}
            ></Message>                
        </>
    );

    async function RegisterUser() {
        if (username != null && email != null && password != null && firstname != null && lastname != null && passwordRepeat != null) {
            try { 
                await UserAPI.registerUser(username, email, firstname, lastname, password); 
            } catch (error) {
                setNotice("Registration " + error);
                return;
            }
            setNotice("Registration successful!");    
        }
        else {
            setNotice("Please provide the needed data");
        }
        return;
    }
}