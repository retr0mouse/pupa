import React, { ReactElement, useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import styled, { keyframes } from 'styled-components';

interface Props{
    title: string;
    initWords?: string[];
    transWords?: string[];
    defaultInitWord?: string;
    defaultTransWord?: string;
    trigger: any;
    onTypedInit(event: any): void;
    onTypedTrans(event: any): void;
    onClickedSubmit(index?: number): void;
}

const defaultProps: Props = {
    initWords: ['default init word'],
    transWords: ['default trans word'],
    onTypedInit: function (): void {
        throw new Error("Function not implemented.");
    },
    onTypedTrans: function (): void {
        throw new Error("Function not implemented.");
    },
    onClickedSubmit: function (): void {
        throw new Error("Function not implemented.");
    },
    trigger: undefined,
    defaultInitWord: "",
    defaultTransWord: "",
    title: ''
}

const TextField = styled.input`
    position: relative;
    font-size: 36px;
    height: 15px;
    width: 500px;
    padding: 30px;
    margin-bottom: 30px;
    border: none;
    border-radius: 20px;
    font-family:  'Poppins', sans-serif;
    margin-right: 40px;

    transition: transform .2s;
    :hover {
    transform: scale(1.1);
    }
`;
const anvil = keyframes`
    0% {
        transform: scale(1) translateY(0px);
        opacity: 0;
        box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }

    1% {
        transform: scale(0.96) translateY(10px);
        opacity: 0;
        box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }

    100% {
        transform: scale(1) translateY(0px);
        opacity: 1;
        box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
`

const fadeIn = keyframes`
    0% { opacity: 0; }
  100% { opacity: 1; }
`;

const StyledPopup = styled(Popup)`
    &-overlay {
        animation: ${fadeIn} .7s;
        background-color: #58585841;
    }

    &-content {
        animation: ${anvil} 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
    }

    
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(241, 243, 252);
    padding: 50px;
    border-radius: 15px;

    h1 {
        font-family: 'Open Sans', sans-serif;
        font-size: 44px;
        margin-bottom: 60px;
    }

    label {
        font-family: 'Poppins', sans-serif;
        color: red;
        font-size: 30px;
        margin-bottom: 10px;
    }
`;

const SubmitButton = styled.button`
    transition: transform .5s;
    :hover {
        transform: scale(1.05);
    }
    width: fit-content;
    align-self: center;
    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    /* margin-top: 30px; */
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 47px;
    padding: 10px;
    color: #FFFFFF;
`;

export function CardFieldsPopup(props:Props): ReactElement{
    const [initWord, setInitWord] = useState("") as any;
    const [transWord, setTransWord] = useState("") as any;
    const [startedTypingFront, setStartedTypingFront] = useState(false);
    const [startedTypingBack, setStartedTypingBack] = useState(false);

    return (
        <StyledPopup
            trigger={props.trigger}
            modal
            lockScroll
        >
            {(close: any) => (
                <Container>
                    <h1>{props.title}</h1>
                    <label htmlFor="InitialWord">{initWord.length === 0 && startedTypingFront ? "Please provide a front text" : ""}</label>
                    <TextField type="input" placeholder="Word" name="InitialWord" required onInput={(event: any) => {
                        props.onTypedInit(event?.target.value);
                        setInitWord(event?.target.value)
                        setStartedTypingFront(true);
                    }}/>
                    <label htmlFor="WordTranslate">{transWord.length === 0 && startedTypingBack ? "Please provide a back text" : ""}</label>
                    <TextField type="input" maxLength={2048} placeholder="Word Translate" name="WordTranslate" required onInput={(event: any) => {
                        props.onTypedTrans(event?.target.value);
                        setTransWord(event?.target.value);
                        setStartedTypingBack(true);
                    }}/>
                    <SubmitButton
                        onClick={() => {
                            setStartedTypingBack(true);
                            setStartedTypingFront(true);
                            if (checkInputs()) {
                                props.onClickedSubmit()
                                setInitWord('');
                                setTransWord('');
                                close();
                            }
                        }}
                    >
                        Submit
                    </SubmitButton>
                </Container>
            )}
        </StyledPopup>
    )

    function checkInputs(): boolean {
        let isFilled = true;
        if (initWord.length === 0) {
            isFilled = false;
        }
        if (transWord.length === 0) {
            isFilled = false;
        }
        return isFilled;
    }
};

CardFieldsPopup.defaultProps = defaultProps;
