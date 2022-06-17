import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { QuizAPI } from "../apis/QuizAPI";
import { UserAPI } from "../apis/UserAPI";
import { CreatePackInputs } from "../components/CreatePackInputs";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import { PopupDialog } from "../components/PopupDialog";
import { PlayerResponse } from "../templates/responses/PlayerResponse";
import plusIcon from "../../images/plus.svg";
import { Cards } from "../components/Cards";
import { PackAPI } from "../apis/PackAPI";
import { Pack } from "../templates/Pack";
import { Quiz } from "../templates/Quiz";

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

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
            <Navigation
                link="/student"
                isEnabled={true}
            />
            <CreatePackInputs 
                onTitleTyped={(text) => setPackName(text)}
                onClickedSave={() => addPack()} 
                onDescriptionTyped={(text) => setPackDescription(text)}
            ></CreatePackInputs>
            <PopupDialog
                image={plusIcon} 
                onTypedInit={(cardInit) => setCurrentInitWord(cardInit)} 
                onTypedTrans={(cardTrans) => setCurrentTransWord(cardTrans)}
                onClickedSubmit={() => addCard()}></PopupDialog>
            <Message
                message={notice}
                updateMessage={() => setNotice()}
            ></Message>
            <CardsContainer>
                <Cards
                    initWords={initWords}
                    transWords={transWords} 
                    image={undefined} 
                    onTypedInit={(value) => setCurrentInitWord(value)} 
                    onTypedTrans={(value) => setCurrentTransWord(value)} 
                    onClickedSubmit={(index:any) => changeCard(index)}
                ></Cards>
            </CardsContainer>
        </>
            
    );

    async function addPack() {
        if (packName.length > 0 && packDescription.length > 0) {
            try {
                const pack = {
                    title: packName,
                    description: packDescription
                } as Pack;
                const quizzesList = [] as any[];
                for (let i = 0; i < initWords.length; i++) {
                    quizzesList.push({
                        initialWord: initWords[i],
                        translatedWord: transWords[i]
                    })
                }
                await PackAPI.createPackWithQuizzes(pack, quizzesList, await userId);
                setNotice("Pack created successfully");
            } catch (error) {
                setNotice("Error " + error);
            }
        }
    }

    async function getUserId() {
        const user = await UserAPI.GetUser() as PlayerResponse;
        return user.id;
    }

    function addCard() {
        setInitWords(initWords.concat(currentInitWord));
        setTransWords(transWords.concat(currentTransWord));
        setCurrentInitWord("");
        setCurrentTransWord("");
    }

    function changeCard(index: any): void {
        initWords[index] = currentInitWord;
        transWords[index] = currentTransWord;
        setInitWords([...initWords]);
        setTransWords([...transWords]);
    }
}
