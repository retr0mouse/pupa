import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { QuizzesPage } from "../pages/QuizzesPage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { RolePage } from "../pages/RolePage";

export function Main() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/quizzes" element={<QuizzesPage/>}></Route>
            <Route path="/register" element={<RegistrationPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            {/* <Route path="/student" element={<StudentPage/>}></Route>
            <Route path="/teacher" element={<TeacherPage/>}></Route> */}
            <Route path="/roles" element={<RolePage/>}></Route>
        </Routes>
    );
}
