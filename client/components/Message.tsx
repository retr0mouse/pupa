import React, { ReactElement } from "react";
import styled from "styled-components";


const Text = styled.p`
    font-size: 25px;
    font-family: "Comic Sans MS";
`;

const TextContainer = styled.div`
    position: absolute;
    right: 20%;
    top: 20%;
    background-color: yellow;
    border-radius: 10px;
`;

interface Props {
    message: string;
}

export function Message(props: Props): ReactElement {
    return (
        <TextContainer>
            <Text>{props.message}</Text>
        </TextContainer>
    );
}