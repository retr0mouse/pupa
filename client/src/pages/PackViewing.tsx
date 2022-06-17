import React, { ReactElement, useEffect, useState } from "react";
import { PackAPI } from "../apis/PackAPI";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import { Packs } from "../components/Packs";
import { Pack } from "../templates/Pack";
import styled from "styled-components";

const PacksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: baseline;
`;  

export function PackViewing(): ReactElement {
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
                <Packs
                    packs={packs}
                ></Packs>
            </PacksContainer>
            
        </>
    );

    async function fetchPacks() {
        try {
            const packs = await PackAPI.getPacksByUserId();
            console.log(packs);
            setPacks([...packs]);
        } catch (error) {
            setNotice("Error" + error);
        }
    }
} 