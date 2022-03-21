import React, { useEffect, useState, ReactElement } from "react";
import { QuizAPI } from "./apis/QuizAPI";
import { QuizCreationBox } from "./components/QuizCreationBox";
import { Quizzes } from "./components/Quizzes";
import { Message } from "./components/Message";

export default function App() {
    const [quizzes, setQuizzes] = useState([]) as any;
    const [query, setQuery] = useState() as any;
    const [message, setMessage] = useState() as any;

    useEffect(() => {
        fetchQuizzes().catch(console.log);  // tries, and if falls logs in into the console
    }, []);

    useEffect(() => {
        if (!message) {
            return;
        }
        const timeout = setTimeout(() => setMessage(""), 2000);
        return () => {
            clearTimeout(timeout);
        };
    }, [message]);

    return (
        <div>
            <QuizCreationBox 
                onTyped={(event) => setQuery(event.target.value)}
                onClicked={() => query.length > 0 ? createQuiz(query) : null}
            />
            <Quizzes quizzes={quizzes}/>
            <Message 
                message={message}
            />

        </div>
    );

    async function createQuiz(name: string) {
        try {
            await QuizAPI.addQuiz(name);
        } catch (error) {
            setMessage(error + "👎");
            return;
        }
        setMessage("👍");
        fetchQuizzes();
    }

    async function fetchQuizzes() {
        const quizzes = await QuizAPI.getQuizzes();
        if (quizzes.length < 0) {
            setMessage("No quizzes found");
            return;
        }
        setQuizzes(quizzes);
    }
}
