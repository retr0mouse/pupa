import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Navigation } from "../components/NavigationBar";

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
        margin:20px;

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
    return (<>
    <Navigation
        link="/roles"
        isEnabled={true}
    />
        <Container>
            
            <NavLink to="/create-pack">
                <button>
                    Create new pack
                </button>
            </NavLink>
            <NavLink to="/packs">
                <button>
                    View created packs
                </button>
            </NavLink>
        </Container>
    </>
    );
} 