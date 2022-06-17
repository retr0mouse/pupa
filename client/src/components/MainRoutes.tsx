import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { LoggingIn } from "../pages/LoggingIn";
import { PackCreating } from "../pages/PackCreating";
import { PackRedaction } from "../pages/PackRedaction";
import { PackViewing } from "../pages/PackViewing";
import { QuizzesList } from "../pages/QuizzesList";
import { Registration } from "../pages/Registration";
import { RoleSelection } from "../pages/RoleSelection";
import { StudentHome } from "../pages/StudentHome";
import { TeacherHome } from "../pages/TeacherHome";

export function Main() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quizzes" element={<QuizzesList/>}/>
            <Route path="/register" element={<Registration/>}/>
            <Route path="/login" element={<LoggingIn/>}/>
            <Route path="/teacher" element={<TeacherHome/>}/>
            <Route path="/student" element={<StudentHome/>}/>
            <Route path="/roles" element={<RoleSelection/>}/>
            <Route path="/create-pack" element={<PackCreating/>}/>
            <Route path="/packs" element={<PackViewing/>}/>
            <Route path="/pack-redact/:packId" element={<PackRedaction/>}/>
        </Routes>
    );
}
