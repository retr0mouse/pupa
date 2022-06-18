import React, { useState } from "react";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import styled from "styled-components";
import { PackFindingBox } from "../components/PackFindingBox";
import { PackAPI } from "../apis/PackAPI";
import { PacksPreview } from "../components/PacksPreview";
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
                link="/student"
                enableRolesButton={true}
                enableLogoutButton={true}
            />
            <PackFindingBox
                onTyped={(id) => {
                    setUserId(id);
                }} 
                onClicked={() => fetchPacks()}
            ></PackFindingBox>
            {loading ? 
                <SpinnerContainer><Spinner size={120} border={25}></Spinner></SpinnerContainer> 
                : 
                <PacksContainer>
                    <PacksPreview
                        link="/pack-study/"
                        packs={packs}
                    ></PacksPreview>
                </PacksContainer>
            }
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
