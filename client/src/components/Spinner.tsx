import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
    size: number;
    border: number;
}

const spinnerAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const LoadingSpinner = styled.div<Props>`
    border: ${(props) => props.border + "px "} solid white;
    border-radius: 50%;
    border-top: ${(props) => props.border + "px"} solid #5B81E2;
    width: ${(props) => props.size + "px"};
    height: ${(props) => props.size + "px"};
    animation: ${spinnerAnimation} 2s linear infinite;
`;

export function Spinner(props: Props): ReactElement {
    return (
        <LoadingSpinner
            size={props.size}
            border={props.border}
        >
        </LoadingSpinner>
    );
}