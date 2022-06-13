import React, { ReactElement } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
interface Props{
    image:any
}
const PopupButton = styled.div`
    position: absolute;
    top: 80%;
    right: 5%;
    img{
        width: 150px;
        transition: transform .2s;
        :hover {
        transform: scale(1.1);
        }
    }
    cursor: pointer;
`

export function PopupDialog(props:Props):ReactElement{
  return <Popup
            trigger={<PopupButton className="button"><img src={props.image}></img></PopupButton>}
            modal
            nested
            >
            {(close: any) => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> Modal Title </div>
                    <div className="content">
                        <input type = "text" placeholder='Sisesta sõna'>
                        </input>
                        <br/>
                        <input type = "text" placeholder='Sisesta sõna tõlge'>
                        </input>
                    </div>
                    <div className="actions">
                        <button
                            className="button"
                            onClick={() => {    
                                close();
                            } }
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </Popup>
};