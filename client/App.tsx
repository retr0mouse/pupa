import React, { useEffect, useState, ReactElement } from "react";
import { QuizAPI } from "./apis/QuizAPI";
import { QuizCreationBox } from "./components/QuizCreationBox";
import { Quizzes } from "./components/Quizzes";
import { Message } from "./components/Message";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";

export default function App() {
    return (
        <div>
            <Navigation/>
            <Main/>
        </div>
    );
}
