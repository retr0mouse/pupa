import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreatedPacks } from "./src/pages/CreatedPacks";
import { Home } from "./src/pages/HomePage";
import { Login } from "./src/pages/Login";
import { PackCreating } from "./src/pages/PackCreating";
import { PackOverview } from "./src/pages/PackOverview";
import { PackStudy } from "./src/pages/PackStudy";
import { QuizzesList } from "./src/pages/QuizzesList";
import { Registration } from "./src/pages/Registration";
import { RoleSelection } from "./src/pages/RoleSelection";
import { StudentHome } from "./src/pages/StudentHome";
import { TeacherHome } from "./src/pages/TeacherHome";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quizzes" element={<QuizzesList/>}/>
            <Route path="/register" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/teacher" element={<TeacherHome/>}/>
            <Route path="/student" element={<StudentHome/>}/>
            <Route path="/roles" element={<RoleSelection/>}/>
            <Route path="/create-pack" element={<PackCreating/>}/>
            <Route path="/packs" element={<CreatedPacks/>}/>
            <Route path="/pack-overview/:packId" element={<PackOverview/>}/>
            <Route path="/pack-study/:packId" element={<PackStudy/>}/>
        </Routes>
    );
}
