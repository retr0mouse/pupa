import React, { ReactElement, useState } from "react";
import { Navigation } from "../components/NavigationBar";
import { RegistraionInputs } from "../components/RegistrationInputs";

export function RegistrationPage(): ReactElement {
    const [username, setUsername] = useState("") as any;
    const [firstname, setFirstname] = useState("") as any;
    const [lastname, setLastname] = useState("") as any;
    const [email, setEmail] = useState("") as any;
    const [password, setPassword] = useState("") as any; 
    const [passwordRepeat, setPasswordRepeat] = useState("") as any;
    
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
                onClickedSubmit={() => Log()}
            ></RegistraionInputs>
        </>
    );

    function Log() {
        console.log(`${username} ${firstname} ${lastname} ${email} ${password} ${passwordRepeat}`)
    }
}