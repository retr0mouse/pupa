import React, { ReactElement, useEffect, useState } from "react";
import { QuizAPI } from "../apis/QuizAPI";
import { Message } from "./Message";
import { QuizCreationBox } from "./QuizCreationBox";

export function Home(): ReactElement{
    const [query, setQuery] = useState() as any;
    const [message, setMessage] = useState() as any;
    
    return(
        <>
            <QuizCreationBox 
                onTyped={(event) => setQuery(event.target.value)}
                onClicked={() => query ? createQuiz(query) : null}
                link={query ? "/quizzes" : "/"}
            />
            <Message 
                updateMessage={() => setMessage()}
                message={message}
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

