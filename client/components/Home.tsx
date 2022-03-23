import React, { ReactElement, useEffect, useState } from "react";
import { QuizAPI } from "../apis/QuizAPI";
import { QuizCreationBox } from "./QuizCreationBox";

export function Home(): ReactElement{
    const [query, setQuery] = useState() as any;
    const [message, setMessage] = useState() as any;
    
    useEffect(() => {
        if (!message) {
            return;
        }
        const timeout = setTimeout(() => setMessage(""), 2000);
        return () => {
            clearTimeout(timeout);
        };
    }, [message]);
    
    return(
        <>
            <QuizCreationBox 
                onTyped={(event) => setQuery(event.target.value)}
                onClicked={() => query ? createQuiz(query) : null}
                link={query ? "/quizzes" : "/"}
            />
        </>
    );

    async function createQuiz(name: string) {
        try {
            await QuizAPI.addQuiz(name);
        } catch (error) {
            setMessage(error + "👎");
            return;
        }
        setMessage("👍");
    }
}
