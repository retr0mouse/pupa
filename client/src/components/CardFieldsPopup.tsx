import React, { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import styled, { keyframes } from 'styled-components';
import { selectCardById } from '../redux/cardsSlice';
import { RootState } from '../redux/store';
import { Quiz } from '../templates/Quiz';

interface Props{
    id: string;
    title: string;
    trigger: any;
    onClickedSubmit(card: Quiz): void;
}

const defaultProps: Props = {
    trigger: undefined,
    title: '',
    id: '',
    onClickedSubmit: function (): Quiz {
        throw new Error('Function not implemented.');
    }
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

export function CardFieldsPopup(props:Props): ReactElement {
    const card = useSelector((state: RootState) => props.id && selectCardById(state, props.id)) as Quiz;

    const [frontSide, setFrontSide] = useState(typeof card != 'undefined' ? card.initialWord : '' ) as any;
    const [backSide, setBackSide] = useState(typeof card != 'undefined' ? card.translatedWord : '' ) as any;
    const [startedTypingFront, setStartedTypingFront] = useState(false);
    const [startedTypingBack, setStartedTypingBack] = useState(false);

    const onFrontChanged = (e: any) => setFrontSide(e.target.value)
    const onBackChanged = (e: any) => setBackSide(e.target.value)

    return (
        <StyledPopup
            trigger={props.trigger}
            modal
            lockScroll
            key={props.id}
        >
            {(close: any) => (
                <Container>
                    <h1>{props.title}</h1>
                    <label htmlFor="InitialWord">{typeof frontSide !== 'undefined' && frontSide.length === 0 && startedTypingFront ? "Please provide a front text" : ""}</label>
                    <TextField type="input" placeholder="Word" name="InitialWord" value={frontSide} required onInput={(event: any) => {
                        onFrontChanged(event);
                        setStartedTypingFront(true);
                    }}/>
                    <label htmlFor="WordTranslate">{typeof backSide !== 'undefined' && backSide.length === 0 && startedTypingBack ? "Please provide a back text" : ""}</label>
                    <TextField type="input" placeholder="Word Translate" value={backSide} name="WordTranslate" required onInput={(event: any) => {
                        onBackChanged(event);
                        setStartedTypingBack(true);
                    }}/>
                    <SubmitButton
                        onClick={() => {
                            if (checkInputs()) {
                                props.onClickedSubmit({initialWord: frontSide, translatedWord: backSide} as Quiz);
                                setStartedTypingBack(false);
                                setStartedTypingFront(false);
                                if (!card.id) {
                                    setFrontSide('');
                                    setBackSide('');
                                }
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
        if (frontSide.length === 0) {
            isFilled = false;
        }
        if (backSide.length === 0) {
            isFilled = false;
        }
        return isFilled;
    }
};

CardFieldsPopup.defaultProps = defaultProps;
