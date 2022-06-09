import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { QuizzesPage } from "../pages/QuizzesPage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { RolePage } from "../pages/RolePage";
import { TeacherStartPage } from "../pages/TeacherStartPage";

export function Main() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/quizzes" element={<QuizzesPage/>}></Route>
            <Route path="/register" element={<RegistrationPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            {/* <Route path="/student" element={<StudentStartPage/>}></Route> */}
            <Route path="/teacher" element={<TeacherStartPage/>}></Route>
            <Route path="/roles" element={<RolePage/>}></Route>
        </Routes>
    );
}
