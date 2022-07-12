import React, { ReactElement, 
    useEffect, 
    useState 
} from "react";
import styled from "styled-components";
import { UserAPI } from "../apis/UserAPI";
import { CreatePackInputs } from "../components/CreatePackInputs";
import { ErrorMessage as ErrorMessage } from "../components/ErrorMessage";
import { Navigation } from "../components/NavigationBar";
import { CardFieldsPopup } from "../components/CardFieldsPopup";
import { User } from "../templates/User";
import plusIcon from "../../images/plus.svg";
import { PackAPI } from "../apis/PackAPI";
import { Pack } from "../templates/Pack";
import { Card } from "../components/Card";
import { SuccessMessage } from "../components/SuccessMessage";
import { cardAdded, cardUpdated, selectAllCards } from "../redux/cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Quiz } from "../templates/Quiz";

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
    const cards = useSelector(selectAllCards);
    const dispatch = useDispatch();

    const [userId, setUserId] = useState(null) as any;
    const [packName, setPackName] = useState("") as any;
    const [packDescription, setPackDescription] = useState("") as any;
    const [errorNotice, setErrorNotice] = useState("") as any;
    const [successNotice, setSuccessNotice] = useState("") as any;

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
                onClickedSubmit={(quiz) => addCard(quiz.initialWord, quiz.translatedWord)}
            ></CardFieldsPopup>
            <ErrorMessage
                message={errorNotice}
            ></ErrorMessage>
            <SuccessMessage
                message={successNotice}
            ></SuccessMessage>
            <CardsContainer>
                {cards?.map((card) => (
                    <CardFieldsPopup
                        id={typeof card.id === "string" ? card.id: ""}
                        title="Edit a card"
                        trigger={
                            <PointyCardContainer>
                                <Card
                                    initialWord={card.initialWord}
                                    translatedWord={card.translatedWord}
                                ></Card>
                            </PointyCardContainer>
                        }
                        onClickedSubmit={(quiz:Quiz) => changeCard(quiz.id, quiz.initialWord, quiz.translatedWord)}
                    ></CardFieldsPopup>
                ))}
            </CardsContainer>
        </>
    )

    async function addPack() {
        if (packName.length > 0 && packDescription.length > 0) {
            try {
                const pack = {
                    title: packName,
                    description: packDescription
                } as Pack;
                const quizzesList = [] as any[];
                for (let i = 0; i < cards.length; i++) {
                    quizzesList.push({
                        initialWord: cards[i]?.initialWord,
                        translatedWord: cards[i]?.translatedWord
                    })
                }
                await PackAPI.createPackWithQuizzes(pack, quizzesList, await userId);
                setSuccessNotice("Pack created successfully");
            } catch (error) {
                setErrorNotice("Error " + error);
            }
        }
    }

    async function getUserId() {
        const user = await UserAPI.GetUser() as User;
        return user.id;
    }

    function addCard(frontSide: string, backSide: string) {
        dispatch(cardAdded(frontSide, backSide));
    }

    function changeCard(index: any, frontSide: string, backSide: string): void {
        dispatch(cardUpdated(index, frontSide, backSide));
    }
}
