import React, { ReactElement } from "react";
import styled from "styled-components"
import { Pack } from "../templates/Pack";
import arrow from "../../images/arrow.svg";
import { NavLink } from "react-router-dom";

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

const Card = styled.div`
    /* width: 200px; */
    min-width: 250px;
    background: #EEEEEE;
    font-family: 'Poppins', sans-serif;
    color: black;
    border-radius: 15px;
    margin: 50px;
    font-size: 30px;
    max-width: 200px;
    max-height: 500px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    /* box-shadow:  0 -25px 0 #4F4F4F; */
    border-bottom: 2rem solid #4F4F4F;

    p {
        padding: 2px 5px;   
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
`

const InitWord = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70%;
    border-bottom: 1.3px solid;
    direction: ltr;
    align-self: center;
`;

const Translate = styled.div`
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70%;
    border-top: 1.3px solid;
    direction: ltr;
    align-self: center;
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

export function PackInfo(props: Props): ReactElement {
    return (
        <>
            <PackContainer>
                <h1>{props.pack.title}</h1>
                <h2>Created: {props.pack.created}</h2>
                <p>{props.pack.description}</p>
                <CardsContainer>
                    {props.pack.quizzes.map((quiz) => {
                        return (
                            <Card>
                                <InitWord><p>{quiz.initialWord}</p></InitWord>
                                <Translate><p>{quiz.translatedWord}</p></Translate>
                            </Card>
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