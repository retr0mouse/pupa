import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { QuizAPI } from "../apis/QuizAPI";
import { UserAPI } from "../apis/UserAPI";
import { CreatePackInputs } from "../components/CreatePackInputs";
import { Message } from "../components/Message";
<<<<<<< HEAD:client/src/pages/PackCreating.tsx
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
=======
import { Navigation } from "../components/NavigationBar";
import { PopupDialog } from "../components/PopupDialog";
import { PackFindingBox } from "../components/PackFindingBox";
import { PlayerResponse } from "../responses/PlayerResponse";
import { Dialog, Transition } from '@headlessui/react'
import Popup from "reactjs-popup";
import plusIcon from "../images/plus.svg";
import { Cards } from "../components/Cards";

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
>>>>>>> origin/popup:client/pages/PackCreating.tsx

export function PackCreating(): ReactElement {
    const [userId, setUserId] = useState(null) as any;
    const [packName, setPackName] = useState("") as any;
    const [packDescription, setPackDescription] = useState("") as any;
    const [currentInitWord, setCurrentInitWord] = useState("") as any;
    const [currentTransWord, setCurrentTransWord] = useState("") as any;
    const [initWords, setInitWords] = useState([]) as any;
    const [transWords, setTransWords] = useState([]) as any;
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
                onDescriptionTyped={(text) => setPackDescription(text)}
            ></CreatePackInputs>
<<<<<<< HEAD:client/src/pages/PackCreating.tsx
            {/* <MyModal/> */}
=======
            <PopupDialog
                image={plusIcon} 
                onTypedInit={(cardInit) => setCurrentInitWord(cardInit)} 
                onTypedTrans={(cardTrans) => setCurrentTransWord(cardTrans)}
                onClickedSubmit={() => addCard()}></PopupDialog>
>>>>>>> origin/popup:client/pages/PackCreating.tsx
            <Message
                message={notice}
                updateMessage={() => setNotice()}
            ></Message>
            <CardsContainer>
                <Cards
                    initWords={initWords}
                    transWords={transWords}
                ></Cards>
            </CardsContainer>
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

    function addCard() {
        setInitWords(initWords.concat(currentInitWord));
        setTransWords(transWords.concat(currentTransWord));
    }
}
