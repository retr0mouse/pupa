import React from "react";
import { Main } from "./components/MainRoutes";
import styled from "styled-components";

const Root = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function App() {
    return (
        <Root>
            <Main/>
        </Root>
    );
}
