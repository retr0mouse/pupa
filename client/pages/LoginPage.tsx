import React, { ReactElement, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { UserAPI } from "../apis/UserAPI";
import { LoginInputs } from "../components/LoginInputs";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";

export function LoginPage(): ReactElement {
    const [username, setUsername] = useState("") as any;
    const [password, setPassword] = useState("") as any;
    const [notice, setNotice] = useState("") as any;

    const history = useNavigate();
    
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
                const response = await UserAPI.LoginUser(username, password);
                if (response.ok) {
                    const result = await response.json() as UserResponse;
                    window.sessionStorage.setItem("token", result.accessToken);
                    history("/roles");
                }
                else {
                    throw new Error("Bad credentials");
                }
            } catch (error) {
                setNotice("Login error: " + error);
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

interface UserResponse {
    id: number;
    username: string;
    email: string;
    roles: string[];
    accessToken: string;
    tokenType: string;
  }