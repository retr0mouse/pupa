import React, { ReactElement } from "react";
import styled from "styled-components";


interface Props {
    onTyped(query: any): void;
    onClicked(event: any): void;
}

const InputBox = styled.div`
    text-align: center;
`;

const Button = styled.button`
    margin-top: 10px;
    font-size: 30px;
`;

const TextField = styled.input`
    font-size: 40px;
`;

export function QuizCreationBox(props: Props): ReactElement {
    return (
        <InputBox>
            <TextField type="text" placeholder="Quiz title" onChange={(event) => props.onTyped(event)}></TextField>
            <br/>
            <Button onClick={(query) => props.onClicked(query)}>Create quiz</Button>
        </InputBox>
    );
}
