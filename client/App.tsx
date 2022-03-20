import React, {useEffect, useState} from "react";
import { QuizAPI } from "./apis/QuizAPI";

export default function App() {
    const [quizzes, setQuizzes] = useState([]) as any;
    const tempQuizzes: string[] = ["one", "two", "three"];
    const [query, setQuery] = useState() as any;
    const [message, setMessage] = useState() as any;

    useEffect(() => {
        fetchQuizzes();
    }, [])

    return (
        <div>
            <input type="text" placeholder="name goes here" value={query} onChange={(event) => setQuery(event.target.value)}></input>
            <button onClick={() => createQuiz(query)}>Create quiz</button>
            {quizzes.length > 0 && 
                <ul>
                {quizzes.map((quiz: string) => {
                    return (
                        <li>{quiz}</li>
                    )
                })}
                </ul>
            }
            {console.log(quizzes)}
            <p>{message}</p>
        </div>
    );

    function createQuiz(name: string) {
        // let newArr = [quizzes.keys, name];
        // console.log(newArr);
        // setQuizzes([name]);
    }

    async function fetchQuizzes() {
        const quizzes = await QuizAPI.getQuizzes();
        if (quizzes.length < 0) {
            setMessage("No quizzes found");
        }
        setQuizzes(quizzes);
    }
}
