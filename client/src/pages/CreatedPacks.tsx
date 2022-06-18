import React, { ReactElement, useEffect, useState } from "react";
import { PackAPI } from "../apis/PackAPI";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import { FoundPacks } from "../components/FoundPacks";
import { Pack } from "../templates/Pack";
import styled from "styled-components";
import { UserAPI } from "../apis/UserAPI";
import { Spinner } from "../components/Spinner";

const PacksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: baseline;
`;

const SpinnerContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export function CreatedPacks(): ReactElement {
    const [packs, setPacks] = useState([]) as any;
    const [notice, setNotice] = useState("") as any;

    useEffect(() => {
        fetchPacks().catch(console.log);
    }, []); 

    return (
        <>
            <Navigation
                link="/teacher"
                isEnabled={true}
            />
            <Message
                updateMessage={() => setNotice()}
                message={notice}
            ></Message>
            <PacksContainer>
                <FoundPacks
                    packs={packs}
                ></FoundPacks>
            </PacksContainer>
            {packs.length == 0 ? <SpinnerContainer><Spinner size={120} border={25}></Spinner></SpinnerContainer> : null}
        </>
    );

    async function fetchPacks() {
        try {
            const user = await UserAPI.GetUser();
            const packs = await PackAPI.getPacksByUserId(user.id);
            setPacks([...packs]);
        } catch (error) {
            setNotice("Error" + error);
        }
    }
} 