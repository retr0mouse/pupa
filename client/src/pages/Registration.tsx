import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../apis/UserAPI";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import { RegistraionInputs } from "../components/RegistrationInputs";

export function Registration(): ReactElement {
    const [username, setUsername] = useState("") as any;
    const [firstname, setFirstname] = useState("") as any;
    const [lastname, setLastname] = useState("") as any;
    const [email, setEmail] = useState("") as any;
    const [password, setPassword] = useState("") as any; 
    const [passwordRepeat, setPasswordRepeat] = useState("") as any;
    const [notice, setNotice] = useState("") as any;
    const [isSuccessfull, setIsSuccessfull] = useState(false);
    const history = useNavigate();
    
    useEffect(() => {
        if (!notice) {
            return;
        }
        const timeout = setTimeout(() => setNotice(""), 2000);
        return () => {
            clearTimeout(timeout);
            isSuccessfull ? history("/") : null;
        };
    }, [notice])
    
    return (
        <>
            <Navigation
                link="/"
                isEnabled={false}
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
            <Message 
                message={notice} 
                updateMessage={() => setNotice()}
            ></Message>                
        </>
    );

    async function RegisterUser() {
        if (username.length > 0 && email.length > 0 && password.length > 0 && firstname.length > 0 && lastname.length > 0 && passwordRepeat.length > 0) {
            try { 
                const response = await UserAPI.registerUser(username, email, firstname, lastname, password); 
            } catch (error) {
                setIsSuccessfull(false);
                setNotice("Registration " + error);
                return;
            }
            setIsSuccessfull(true);
            setNotice("Registration successful!");    
        }
        else {
            setNotice("Please provide the needed data");
        }
        return;
    }
}