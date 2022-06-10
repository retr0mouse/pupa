import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button {
        width: 500px;
        height: 75px;

        transition: transform .2s;
        :hover {
            transform: scale(1.2);
        }
        
        background: #5B81E2;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 5px;
        cursor: pointer;

        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 47px;

        color: #FFFFFF;
    }
`;

export function TeacherHome() {
    return (
        <Container>
            <NavLink to="/create-pack">
                <button>
                    Create new pack
                </button>
            </NavLink>
        </Container>
    );
} 