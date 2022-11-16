import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { CreatedPacks } from "./src/pages/CreatedPacks";
import { Home } from "./src/pages/Home";
import { Login } from "./src/pages/Login";
import { PackCreating } from "./src/pages/PackCreating";
import { PackOverview } from "./src/pages/PackOverview";
import { PackStudy } from "./src/pages/PackStudy";
import { Registration } from "./src/pages/Registration";
import { RoleSelection } from "./src/pages/RoleSelection";
import { StudentHome } from "./src/pages/StudentHome";
import { TeacherHome } from "./src/pages/TeacherHome";
import { getIsLoggedIn } from "./src/redux/loginSlice";

export default function App() {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/teacher" element={<TeacherHome isLoggedIn={isLoggedIn.value}/>}/>
            <Route path="/student" element={<StudentHome isLoggedIn={isLoggedIn.value}/>}/>
            <Route path="/roles" element={<RoleSelection isLoggedIn={isLoggedIn.value}/>}/>
            <Route path="/create-pack" element={<PackCreating isLoggedIn={isLoggedIn.value}/>}/>
            <Route path="/packs" element={<CreatedPacks isLoggedIn={isLoggedIn.value}/>}/>
            <Route path="/pack-overview/:packId" element={<PackOverview isLoggedIn={isLoggedIn.value}/>}/>
            <Route path="/pack-study/:packId" element={<PackStudy isLoggedIn={isLoggedIn.value}/>}/>
        </Routes>
    );
}
