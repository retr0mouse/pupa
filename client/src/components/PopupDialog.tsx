import React, { ReactElement, useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

interface Props{
    image:any
    onTypedInit(event: any): void;
    onTypedTrans(event: any): void;
    onClickedSubmit(): void;
}

const PopupButton = styled.div`
    position: sticky;
    top: 40%;
    margin-left: 92%;
    
    img{
        
        width: 120px;
        transition: transform .2s;

        :hover {
            transform: scale(1.1);
        }
    }
    cursor: pointer;
`
// const WordInputContainer = styled.div`
//     --primary-color: #11998e;
//     --secondary-color: #38ef7d;

//     position: relative;
//     padding: 15px 0 0;
//     margin-top: 10px;
//     width: 100%;

//     .form__field {
//         font-family: inherit;
//         width: 100%;
//         border: 0;
//         border-bottom: 2px solid gray;
//         outline: 0;
//         font-size: 1.3rem;
//         color: black;
//         padding: 7px 0;
//         background: transparent;
//         transition: border-color 0.2s;

//         &::placeholder {
//             color: transparent;
//         }

//         &:placeholder-shown ~ .form__label {
//             font-size: 1.3rem;
//             cursor: text;
//             top: 20px;
//         }
//     }

//     .form__label {
//         position: rel;
//         top: 0;
//         display: block;
//         transition: 0.2s;
//         font-size: 1rem;
//         color: gray;
//     }

//     .form__field:focus {
//         ~ .form__label {
//             margin-top: 10px;
//             position: relative;
//             top: 0; 
//             display: block;
//             transition: 0.2s;
//             font-size: 1rem;
//             color: var(--primary-color);
//             font-weight: 700;
//         }
//         padding-bottom: 6px;
//         font-weight: 700;
//         border-width: 3px;
//         border-image: linear-gradient(to right, var(--primary-color), var(--secondary-color));
//         border-image-slice: 1;
//     }
//     /* reset input */
//     .form__field {
//         &:required,
//         &:invalid {
//             box-shadow: none;
//         }
//     }
//     /* demo */
//     body {
//         font-family: "Poppins", sans-serif;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         min-height: 100vh;
//         font-size: 1.5rem;
//         background-color: #222222;
//     }
// `
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
export function PopupDialog(props:Props): ReactElement{

    return <Popup
                trigger={<PopupButton className="button"><img src={props.image}></img></PopupButton>}
                modal
                nested
            >
            {(close: any) => (
                <div className="modal">
                    <div className="header"> Card Maker</div>
                    <div className="content">
                        <div className ="form__group">
                            <TextField type="input" className ="form__field" placeholder="Word" name="InitialWord" required onChange={(event: any) => {
                                props.onTypedInit(event?.target.value)
                            }}/>
                            <br/>
                            <TextField type="input" className ="form__field" placeholder="Word Translate" name="WordTranslate" required onChange={(event: any) => {
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
                                props.onClickedSubmit()
                                close();
                            } }
                        >
                            Submit
                        </button>
                    </ButtonContainer>
                </div>
            )}
        </Popup>
};