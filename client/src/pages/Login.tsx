import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { UserAPI } from "../apis/UserAPI";
import { ErrorMessage } from "../components/ErrorMessage";
import { LoginInputs } from "../components/LoginInputs";
import { Navigation } from "../components/NavigationBar";
import { toggleLoggedIn } from "../redux/loginSlice";
import { getNotice } from "../redux/noticeSlice";

export function Login(): ReactElement {
    const [username, setUsername] = useState("") as any;
    const [password, setPassword] = useState("") as any;
    // const [notice, setNotice] = useState("") as any;
    const notice = useSelector(getNotice);
    const dispatch = useDispatch();

    const history = useNavigate();
    
    return (
        <>
            <Navigation
                link="/"
                enableRolesButton={false}
                enableLogoutButton={false}
            />
            <LoginInputs
                onUsernameTyped={(username) => setUsername(username)}
                onPasswordTyped={(password) => setPassword(password)}
                onClickedSubmit={() => {
                    LoginUser();
                }}
            ></LoginInputs>
            <ErrorMessage
                message={notice}
            ></ErrorMessage>
        </>
    );
    async function LoginUser() {
        try {
            const response = await UserAPI.LoginUser(username, password);
            if (response.ok) {
                const result = await response.json() as UserResponse;
                window.sessionStorage.setItem("token", result.accessToken);
                dispatch(toggleLoggedIn());
                history("/roles");
            }
            else {
                throw new Error("Bad credentials");
            }
        } catch (error) {
            return;
        }
        // setNotice("Login successful!");    
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
