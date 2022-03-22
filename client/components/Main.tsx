import { NavLink, Routes, Route } from "react-router-dom";
import React from "react";
import { QuizzesPage } from "./QuizzesPage";
import App from "../App";
import { Quizzes } from "./Quizzes";

interface Props {
    quizzes: string[];
}

export function Main(props: Props) {
    return(
        <Routes>
            {/* <Route path="/" element={}></Route> */}
            <Route path="/quizzes" element={<Quizzes quizzes={props.quizzes}/>}></Route>
        </Routes>
    );
}
