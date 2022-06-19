import React, { ReactElement } from "react";
import styled from "styled-components"
import { Pack } from "../templates/Pack";
import arrow from "../../images/arrow.svg";
import { NavLink } from "react-router-dom";
import { Card } from "./Card";

interface Props {
    pack: Pack;
}

const PackContainer = styled.div`
    margin-top: 550px;
    background-color: white;
    border-radius: 15px;
    width: 80%;
    height: max-content;
    padding: 25px 50px 0 50px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Open Sans', sans-serif;
    }

    p {
        font-size: 25px;
        font-family: 'Poppins', sans-serif;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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

export function PackItems(props: Props): ReactElement {
    return (
        <>
            <PackContainer>
                <h1>{props.pack.title}</h1>
                <h2>Created: {props.pack.created}</h2>
                <p>{props.pack.description}</p>
                <CardsContainer>
                    {props.pack.quizzes.map((quiz) => {
                        return (
                            <Card
                                initialWord={quiz.initialWord}
                                translatedWord={quiz.translatedWord}
                            ></Card>
                        )
                    })}
                </CardsContainer>
            </PackContainer>
            <NavLink to="/packs">
                <ReturnButton>
                    <img src={arrow} alt="" />
                </ReturnButton>
            </NavLink>
            
        </>
        
    );
}