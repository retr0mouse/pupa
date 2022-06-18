import React, {ReactElement} from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

interface Props {
    initWords: string[];
    transWords: string[];
    image:any
    onTypedInit(event: any): void;
    onTypedTrans(event: any): void;
    onClickedSubmit(index: number): void;
}

const Card = styled.div`
    width: 200px;
    background: #5B81E2;
    font-family: 'Poppins', sans-serif;
    color:white;
    border-radius: 15px;
    margin: 50px;
    font-size: 30px;
    max-width: 200px;
    max-height: 500px;
    border: 1px solid;
    white-space: nowrap;
    p {
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

 const InitWord = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: auto;
    border-bottom: 1px solid;
    direction: ltr;
    align-self: center;
 `;

 const Translate = styled.div`
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: auto;
    border-top: 1px solid;
    direction: ltr;
    align-self: center;
 `;

const TextField = styled.input`
    text-align: center;
    text-align-last: center;
    position: relative;
    font-size: 50px;
    margin: 10px;
    border: 1px solid;
    border-radius: 20px;
    font-family:  'Poppins', sans-serif;

    transition: transform .2s;
    :hover {
    transform: scale(1.1);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    .button {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        border: none;
        width: 300px;
        height: 150px;
        font-size:50px;
        border-radius: 30px;
        background: #5B81E2;
        color:white;

        transition: transform .2s;
        :hover {
        transform: scale(1.1);
        }
    }
`;


export function CardsToRedact(props: Props): ReactElement {
    return (
        <>
            {props.initWords?.map((word, index) => {
                return (
                    <Popup
                        trigger={
                                <Card>
                                    <InitWord><p>{word}</p></InitWord>
                                    <Translate><p>{props.transWords[index]}</p></Translate>
                                </Card>
                            }
                        modal
                        nested
                    >
                    {(close: any) => (
                        <div className="modal">
                            <div className="header"> Card Redactor</div>
                            <div className="content">
                                <div className ="form__group">
                                    <TextField type="input" className ="form__field" placeholder="Word" name="InitialWord" defaultValue={word} required onChange={(event: any) => {
                                        props.onTypedInit(event?.target.value)
                                    }}/>
                                    <br/>
                                    <TextField type="input" className ="form__field" placeholder="Word Translate" name="WordTranslate" defaultValue={props.transWords[index]} required onChange={(event: any) => {
                                        props.onTypedTrans(event?.target.value)
                                    }}/>
                                </div>      
                            </div>
                            <ButtonContainer className="actions">
                                <button
                                    className="button"
                                    onClick={() => {    
                                        close();
                                    } }
                                >
                                    Close
                                </button>
                                <button
                                    className="button"
                                    onClick={() => {    
                                        props.onClickedSubmit(index)
                                        close();
                                        return index;
                                    } }
                                >
                                    Submit
                                </button>
                            </ButtonContainer>
                        </div>
                    )}
                    </Popup>
                );
            })}
        </>
    );
} 