import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { QuizzesPage } from "./QuizzesPage";

export function Main() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/quizzes" element={<QuizzesPage/>}></Route>
        </Routes>
    );
}
