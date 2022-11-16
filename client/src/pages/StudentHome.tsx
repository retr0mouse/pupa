import React, { useEffect, useState } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { Navigation } from "../components/NavigationBar";
import styled from "styled-components";
import { PackFindingBox } from "../components/PackFindingBox";
import { PackAPI } from "../apis/PackAPI";
import { PacksPreview } from "../components/PacksPreview";
import { Spinner } from "../components/Spinner";
import { useNavigate } from "react-router";

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

interface Props {
    isLoggedIn: boolean
}

export function StudentHome(props: Props) {
    const history = useNavigate();
    useEffect(() => {
        !props.isLoggedIn ? history("/") : null;
    }, [])
    
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
            <ErrorMessage
                message={notice}
            ></ErrorMessage>
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
