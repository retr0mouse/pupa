import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PackAPI } from "../apis/PackAPI";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import { PackItems } from "../components/PackItems";
import { Spinner } from "../components/Spinner";

const SpinnerContainer = styled.div`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export function PackOverview() {
    const { packId } = useParams();
    const [pack, setPack] = useState() as any;
    const [notice, setNotice] = useState() as any;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPack();
    }, []);
    
    return (
        <>
            <Navigation
                link="/teacher"
                enableRolesButton={true}
                enableLogoutButton={true}
            ></Navigation>
            <Message
                message={notice}
                updateMessage={() => setNotice()}
            ></Message>
            {loading ?
                <SpinnerContainer><Spinner size={120} border={25}></Spinner></SpinnerContainer> 
                : 
                <PackItems
                    pack={pack}
                ></PackItems>
            }
        </>
    )

    async function fetchPack() {
        if (!packId) return;
        try {
            setPack(await PackAPI.getPackById(+packId));
        } catch (error) {
            setNotice("Error: " + error);
        }
        setLoading(false);
    }
}