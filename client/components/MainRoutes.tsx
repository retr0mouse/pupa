import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { QuizzesPage } from "../pages/QuizzesPage";
import { RegistrationPage } from "../pages/RegistrationPage";

export function Main() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/quizzes" element={<QuizzesPage/>}></Route>
            <Route path="/register" element={<RegistrationPage/>}></Route>
        </Routes>
    );
}
