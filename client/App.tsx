import React, {useEffect, useState} from "react";

export default function App() {
    const [quizzes, setQuizzes] = useState([""]);
    const tempQuizzes: string[] = ["one", "two", "three"];
    const [query, setQuery] = useState("");

    return (
        <div>
            <input type="text" placeholder="name goes here" value={query} onChange={(event) => setQuery(event.target.value)}></input>
            <button onClick={() => createQuiz(query)}>Create quiz</button>
            <ul>
            {quizzes.map((quiz) => {
                return (
                    <li>{quiz}</li>
                )
            })}
            </ul>
            {console.log(quizzes)}
        </div>
    );

    function createQuiz(name: string) {
        let newArr = [quizzes.keys, name];
        console.log(newArr);
        setQuizzes([name]);
    }
}
