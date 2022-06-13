import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { QuizAPI } from "../apis/QuizAPI";
import { UserAPI } from "../apis/UserAPI";
import { CreatePackInputs } from "../components/CreatePackInputs";
import { Message } from "../components/Message";
import { QuizCreationBox } from "../components/QuizCreationBox";
import { PlayerResponse } from "../../responses/PlayerResponse";
import MyModal from "../components/MyModal";

// const MainContainer = styled.div`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     align-items: center;
// `;

export function PackCreating(): ReactElement {
    const [userId, setUserId] = useState(null) as any;
    const [packName, setPackName] = useState("") as any;
    const [packDescription, setPackDescription] = useState("") as any;
    const [quizzes, setQuizzes] = useState([]) as any;
    const [notice, setNotice] = useState("") as any;

    useEffect(() => {
        const id = getUserId();
        if (!id) {
            return;
        }
        setUserId(id);
    }, []);

    return (
        <>
            <CreatePackInputs 
                onTitleTyped={(text) => setPackName(text)}
                onClickedSave={() => addPack()} 
                onClickedPlus={() => addEmptyQuiz()}
                onDescriptionTyped={(text) => setPackDescription(text)}
                quizzes={quizzes}
            ></CreatePackInputs>
            {/* <MyModal/> */}
            <Message
                message={notice}
                updateMessage={() => setNotice()}
            ></Message>
        </>
    );

    async function addPack() {
        if (packName.length > 0 && packDescription.length > 0) {
            try {
                await QuizAPI.addPack(packName, packDescription, await userId);
                setNotice("Pack created successfully");
            } catch (error) {
                setNotice("Error" + error);
            }
        }
    }

    async function fetchQuizzes() {
        
    }

    async function getUserId() {
        const user = await UserAPI.GetUser() as PlayerResponse;
        return user.id;
    }

    function addEmptyQuiz() {
       setQuizzes(quizzes.concat(<div>hello</div>));
    }
}
