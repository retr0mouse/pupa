import React, {useEffect, useState} from "react";
import { Database } from "./apis/Database";

export default function App() {
    const [quizzes, setQuizzes] = useState([""]);
    const tempQuizzes: string[] = ["one", "two", "three"];
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div>
            <input type="text" placeholder="name goes here" value={query} onChange={(event) => setQuery(event.target.value)}></input>
            <button onClick={() => createQuiz(query)}>Create quiz</button>
            {/* <ul>
            {quizzes.map((quiz) => {
                return (
                    <li>{quiz}</li>
                )
            })}
            </ul> */}
            {console.log(quizzes)}
            {message && 
                <h4>
                    {message}
                </h4>
            }
        </div>
    );

    async function createQuiz(name: string) {
        if(name) {
            await Database.addQuiz(name);
            setMessage("");
        }
        else {
            setMessage("Please write a title of your quiz");
        }
        
    }
}
