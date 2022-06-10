import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { LoggingIn } from "../pages/LoggingIn";
import { PackCreating } from "../pages/PackCreating";
import { QuizzesList } from "../pages/QuizzesList";
import { Registration } from "../pages/Registration";
import { RoleSelection } from "../pages/RoleSelection";
import { StudentHome } from "../pages/StudentHome";
import { TeacherHome } from "../pages/TeacherHome";

export function Main() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/quizzes" element={<QuizzesList/>}></Route>
            <Route path="/register" element={<Registration/>}></Route>
            <Route path="/login" element={<LoggingIn/>}></Route>
            <Route path="/teacher" element={<TeacherHome/>}></Route>
            <Route path="/student" element={<StudentHome/>}></Route>
            <Route path="/roles" element={<RoleSelection/>}></Route>
            <Route path="/create-pack" element={<PackCreating/>}></Route>
        </Routes>
    );
}
