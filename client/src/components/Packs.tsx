import React, { ReactElement } from "react";
import styled from "styled-components";
import { Pack } from "../templates/Pack";

interface Props {
    packs: Pack[];
}

const Pack = styled.div`
    padding: 25px;
    width: 17.92em;
    height: 22em;
    background: white;
    font-family: 'Poppins', sans-serif;
    color:white;
    margin: 50px;
    font-size: 30px;
    /* max-width: 500px;
    max-height: 600px; */
    border: 1px solid;
    white-space: nowrap;
    p {
        margin-left: 10px;
        color: black;
        padding: 2px 5px;   
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    transition: transform .2s;
    
    :hover {
        transform: scale(1.1);
    }
`;

const Title = styled.div`
    background-color: rgb(241, 243, 252);
    padding-top: 30px;
    display: flex;
    align-items: baseline;
    flex-direction: column;
    width: auto;
    direction: ltr;
    align-self: center;
`;

export function Packs(props: Props): ReactElement {
    return (
        <>
            {props.packs.map((pack: Pack) => {
                return (<Pack>
                    <Title>
                        <p className="title">{pack.title}</p>
                    </Title>
                    <h1>Kirlejdus</h1>
                    <p>pack id: {pack.id}</p>
                    <p className="description">{pack.description}</p>
                </Pack>)
            })}
        </>
    );
}