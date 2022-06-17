import React, { ReactElement, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { QuizAPI } from "../apis/QuizAPI";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import styled from "styled-components";
import { PackFindingBox } from "../components/PackFindingBox";
import { PackAPI } from "../apis/PackAPI";
import { UserAPI } from "../apis/UserAPI";
import { User } from "../templates/User";
import { FoundPacks } from "../components/FoundPacks";
import { Spinner } from "../components/Spinner";

const PacksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: baseline;
`; 

const SpinnerContainer = styled.div`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


export function StudentHome() {
    const [packs, setPacks] = useState([]) as any;
    const [userId, setUserId] = useState("") as any;
    const [notice, setNotice] = useState("") as any;
    const [loading, setLoading] = useState(false) as any;

    return (
        <>
            <Navigation
                link="/roles"
                isEnabled={true}
            />
            <PackFindingBox
                onTyped={(id) => {
                    setUserId(id);
                }} 
                onClicked={() => fetchPacks()}
            ></PackFindingBox>
            <PacksContainer>
                <FoundPacks
                    packs={packs}
                ></FoundPacks>
            </PacksContainer>
            {loading ? <SpinnerContainer><Spinner size={120} border={25}></Spinner></SpinnerContainer> : null}
            <Message
                updateMessage={() => setNotice()}
                message={notice}
            ></Message>
        </>
    );

    async function fetchPacks() {
        setPacks([]);
        setLoading(true);
        try {
            const packs = await PackAPI.getPacksByUserId(userId);
            setPacks([...packs]);
        } catch (error) {
            setNotice("Error "+ error);
        }
        setLoading(false);
    }
}
