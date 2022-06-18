import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Pack } from "../templates/Pack";

interface Props {
    packs: Pack[];
}

const Pack = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 17.92em;
    height: 22em;
    background: white;
    font-family: 'Poppins', sans-serif;
    margin: 50px;
    font-size: 30px;

    p {
        margin-left: 10px;
    }

    .header {
        margin-left: 10px;
        font-size: 35px;
    }

    transition: transform .2s;
    :hover {
        transform: scale(1.1);
    }
`;

const TitleContainer = styled.div`
    background-color: rgb(241, 243, 252);
    align-items: baseline;
    
    p {
        margin-left: 20px;
    }
`;

const DescriptionContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100%; 
    direction: ltr;
    inline-size: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 100%;
    }
`;



export function FoundPacks(props: Props): ReactElement {
    return (
        <>
            {props.packs.map((pack: Pack) => {
                return (
                    <NavLink style={{textDecoration: "none", color: "black"}} to={"/pack-overview/" + pack.id}>
                        <Pack>
                            <TitleContainer>
                                <p className="title">{pack.title}</p>
                            </TitleContainer>
                            <DescriptionContainer>
                                <h1 className="header">Kirlejdus:</h1>
                                <p>{pack.description}</p>
                            </DescriptionContainer>
                        </Pack> 
                    </NavLink>
                )
            })}
        </>
    );
}
