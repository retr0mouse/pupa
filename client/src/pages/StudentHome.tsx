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

const PacksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: baseline;
`; 


export function StudentHome() {
    const [packs, setPacks] = useState([]) as any;
    const [userId, setUserId] = useState("") as any;
    const [notice, setNotice] = useState("") as any;

    return (
        <>
            <Navigation
                link="/roles"
                isEnabled={true}
            />
            <PackFindingBox
                onTyped={(id) => {
                    console.log(id);
                    setUserId(id);
                }} 
                onClicked={() => fetchPacks()}
            ></PackFindingBox>
            <PacksContainer>
                <FoundPacks
                    packs={packs}
                ></FoundPacks>
            </PacksContainer>
            <Message
                updateMessage={() => setNotice()}
                message={notice}
            ></Message>
        </>
    );

    async function fetchPacks() {
        try {
            console.log(userId);
            const packs = await PackAPI.getPacksByUserId(userId);
            setPacks(packs);
        } catch (error) {
            setNotice("Error "+ error);
            setPacks([]);
        }
    }
}
