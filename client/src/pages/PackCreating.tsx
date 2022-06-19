import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { UserAPI } from "../apis/UserAPI";
import { CreatePackInputs } from "../components/CreatePackInputs";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import { CardFieldsPopup } from "../components/CardFieldsPopup";
import { User } from "../templates/User";
import plusIcon from "../../images/plus.svg";
import { PackAPI } from "../apis/PackAPI";
import { Pack } from "../templates/Pack";
import { Card } from "../components/Card";

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const PopupButton = styled.div`
    position: sticky;
    top: 40%;
    margin-left: 92%;
    
    img{
        
        width: 120px;
        transition: transform .2s;

        :hover {
            transform: scale(1.1);
        }
    }
    cursor: pointer;
`

const PointyCardContainer = styled.div`
    margin: 50px;
    width: fit-content;
    cursor: pointer;
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
                link="/teacher"
                enableRolesButton={true}
                enableLogoutButton={true}
            />
            <CreatePackInputs 
                onTitleTyped={(text) => setPackName(text)}
                onClickedSave={() => addPack()} 
                onDescriptionTyped={(text) => setPackDescription(text)}
            ></CreatePackInputs>
            <CardFieldsPopup
                title="Create a card"
                trigger={<PopupButton><img src={plusIcon}></img></PopupButton>} 
                onTypedInit={(cardInit) => setCurrentInitWord(cardInit)} 
                onTypedTrans={(cardTrans) => setCurrentTransWord(cardTrans)}
                onClickedSubmit={() => addCard()}
            ></CardFieldsPopup>
            <Message
                message={notice}
                updateMessage={() => setNotice()}
            ></Message>
            <CardsContainer>
                {initWords?.map((word: string, index: number) => {
                    return (
                        <CardFieldsPopup
                            key={index}
                            title="Edit a card"
                            trigger={
                                <PointyCardContainer>
                                    <Card
                                        initialWord={word}
                                        translatedWord={transWords[index]}
                                    ></Card>
                                </PointyCardContainer>
                            }
                            defaultInitWord={word}
                            defaultTransWord={transWords[index]}
                            onTypedInit={(value) => setCurrentInitWord(value)} 
                            onTypedTrans={(value) => setCurrentTransWord(value)} 
                            onClickedSubmit={() => changeCard(index)}
                        ></CardFieldsPopup>
                    );
                })}
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
        const user = await UserAPI.GetUser() as User;
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
        setCurrentInitWord("");
        setCurrentTransWord("");
    }
}
