import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
    link: string;
    isEnabled: boolean;
}

const ListItem = styled.li`
    padding: 18px;

    a{
        width: 283px;
        height: 118px;
        
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 85px;

        background: linear-gradient(109.32deg, #2054DB 12.52%, rgba(0, 0, 0, 0) 62.98%), #FF0000;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .role-button {
        font-size: 40px;
        font-family: 'Poppins', sans-serif;
        background: #353535;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    background-color: white;
    margin: 0;
    padding: 0;
    justify-content: space-between;
`;

export function Navigation(props: Props) {
    return (
        <nav>
            <UnorderedList>
                <ListItem>
                    <NavLink
                        to={props.link}>
                        Püpa
                    </NavLink>
                </ListItem>
                <ListItem>
                <NavLink
                        className="role-button"
                        to={"/roles"}
                        >
                        {props.isEnabled ? "Change role" : null}
                    </NavLink>
                </ListItem>
                
            </UnorderedList>
            
        </nav>
    );
}
