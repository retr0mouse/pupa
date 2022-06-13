import React, { ReactElement } from "react";
import styled from "styled-components";

const QuizzesContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const QuizzesList = styled.ul`
    background-color: antiquewhite;
    margin: 0;
    padding-left: 2%;
    border-radius: 15px;
    font-size: 20px;
    font-family: "Comic Sans MS";
    align-self: center;
`;

const QuizzesItem = styled.li`
    margin: 7px 5px;
    text-align: start;
`;

interface Props {
    quizzes: string[];
}

export function Quizzes(props: Props): ReactElement {
    return (
        <QuizzesContainer>
            <h1>Quizzes from the database:</h1>
            <QuizzesList>
                {props.quizzes.map((quiz: any, index: number) => {
                    return (
                        <QuizzesItem key={index}>{quiz.title}</QuizzesItem>
                    );
                })
                }
            </QuizzesList>
        </QuizzesContainer>
    );
}
