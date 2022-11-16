import React, { ReactElement, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { PackAPI } from "../apis/PackAPI";
import { CardsToStudy } from "../components/CardsToStudy";
import { ErrorMessage } from "../components/ErrorMessage";
import { Navigation } from "../components/NavigationBar";
import { Spinner } from "../components/Spinner";
import arrow from "../../images/arrow.svg";

const SpinnerContainer = styled.div`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const CardsContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ReturnButton = styled.div`
    position: absolute;
    top: 15%;   
    left: 5%;
    transform: rotate(-90deg);
    img{
        
        width: 90px;
        transition: transform .2s;

        :hover {
            transform: scale(1.1);
        }
    }
    cursor: pointer;
`;

interface Props {
    isLoggedIn: boolean
}

export function PackStudy(props: Props): ReactElement {
    const history = useNavigate();
    const { packId } = useParams();
    const [cards, setCards] = useState([]) as any;
    const [loading, setLoading] = useState(true) as any;
    const [notice, setNotice] = useState("") as any;
    
    useEffect(() => {
        !props.isLoggedIn ? history("/") : null;
        fetchCards();
    }, []);

    return (
        <>
            <Navigation
                link="/student"
                enableRolesButton={true}
                enableLogoutButton={true}
            ></Navigation>
            <NavLink to="/student">
                <ReturnButton>
                    <img src={arrow} alt="" />
                </ReturnButton>
            </NavLink>
            <CardsContainer>
                {loading ? 
                    <SpinnerContainer>
                        <Spinner size={120} border={25}></Spinner>
                    </SpinnerContainer> 
                    : 
                    <CardsToStudy 
                        cards={cards}            
                    ></CardsToStudy>
                }
                <ErrorMessage
                    message={notice}
                ></ErrorMessage>
            </CardsContainer>
        </>
        
    );

    async function fetchCards() {
        if (!packId) return;
        try {
            const pack = await PackAPI.getPackById(+packId);
            setCards(pack.quizzes);
        } catch(error) {
            setNotice("Error " + error);
        }
        setLoading(false);
    }
}