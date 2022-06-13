import React, { ReactElement, useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import { QuizAPI } from "../apis/QuizAPI";
import { UserAPI } from "../apis/UserAPI";
import { CreatePackInputs } from "../components/CreatePackInputs";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import MyModal, { PopupDialog } from "../components/PopupDialog";
import { QuizCreationBox } from "../components/QuizCreationBox";
import { PlayerResponse } from "../responses/PlayerResponse";
import { Dialog, Transition } from '@headlessui/react'
import Popup from "reactjs-popup";

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
            <Navigation/>
            <CreatePackInputs 
                onTitleTyped={(text) => setPackName(text)}
                onClickedSave={() => addPack()} 
                onClickedPlus={() => addEmptyQuiz()}
                onDescriptionTyped={(text) => setPackDescription(text)}
                quizzes={quizzes}
            ></CreatePackInputs>
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
