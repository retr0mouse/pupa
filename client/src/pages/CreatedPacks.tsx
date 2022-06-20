import React, { ReactElement, useEffect, useState } from "react";
import { PackAPI } from "../apis/PackAPI";
import { ErrorMessage } from "../components/ErrorMessage";
import { Navigation } from "../components/NavigationBar";
import { PacksPreview } from "../components/PacksPreview";
import styled from "styled-components";
import { UserAPI } from "../apis/UserAPI";
import { Spinner } from "../components/Spinner";
import { SuccessMessage } from "../components/SuccessMessage";

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

const Title = styled.h1`
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: fit-content;
    font-size: 44px;
    font-family: 'Open Sans', sans-serif;
`;

export function CreatedPacks(): ReactElement {
    const [packs, setPacks] = useState([]) as any;
    const [errorNotice, setErrorNotice] = useState("") as any;
    const [loading, setLoading] = useState(true) as any;

    useEffect(() => {
        fetchPacks().catch(console.log);
    }, []); 

    return (
        <>
            <Navigation
                link="/teacher"
                enableRolesButton={true}
                enableLogoutButton={true}
            />
            <Title>Created packs overview</Title>
            {loading ? 
                <SpinnerContainer><Spinner size={120} border={25}></Spinner></SpinnerContainer> 
                : 
                <PacksContainer>
                    <PacksPreview
                        link="/pack-overview/"
                        packs={packs}
                    ></PacksPreview>
                </PacksContainer>
            }
            <ErrorMessage
                message={errorNotice}
            ></ErrorMessage>
        </>
    );

    async function fetchPacks() {
        try {
            const user = await UserAPI.GetUser();
            const packs = await PackAPI.getPacksByUserId(user.id);
            setPacks([...packs]);
        } catch (error) {
            setErrorNotice("Error" + error);
        }
        setLoading(false);
    }
} 