import React, { ReactElement, useState } from "react";
import { UserAPI } from "../apis/UserAPI";
import { LoginInputs } from "../components/LoginInputs";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";

export function LoginPage(): ReactElement {
    const [username, setUsername] = useState("") as any;
    const [password, setPassword] = useState("") as any;
    const [notice, setNotice] = useState("") as any; 
    
    return (
        <>
            <Navigation/>
            <LoginInputs
                onUsernameTyped={(username) => setUsername(username)}
                onPasswordTyped={(password) => setPassword(password)}
                onClickedSubmit={() => LoginUser()}
            ></LoginInputs>
            <Message
                message={notice}
                updateMessage={() => setNotice()}
            ></Message>
        </>
    );
    async function LoginUser() {
        if (username != null && password != null) {
            try { 
                await UserAPI.LoginUser(username, password); 
            } catch (error) {
                setNotice("Login " + error);
                return;
            }
            setNotice("Login successful!");    
        }
        else {
            setNotice("Please provide the needed data");
        }
        return;
    }
}
