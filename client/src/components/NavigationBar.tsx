import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";interface Props {
    link: string;
    enableRolesButton: boolean;
    enableLogoutButton: boolean;
}

const ListItem = styled.li`
    display: flex;
    height: 3rem;
    align-items: center;
    padding: 18px;
    

    .logo-link {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 64px;

        background: linear-gradient(109.32deg, #2054DB 12.52%, rgba(0, 0, 0, 0) 62.98%), #FF0000;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    a:link {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }

    a:active {
        text-decoration: underline;
    }
`;

const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    background-color: white;
    margin: 0;
    padding: 0;

    .logo-button {
        flex-grow: 2;
    }

    .role-button a{
        font-size: 40px;
        font-family: 'Poppins', sans-serif;
        color: #353535;
    }

    .logout-button a{
        font-size: 40px;
        font-family: 'Poppins', sans-serif;
        color: #353535;
    }
`

export function Navigation(props: Props) {
    return (
        <>  
            <UnorderedList>
                <ListItem className="logo-button">
                    <NavLink
                        className="logo-link"
                        to={props.link}>
                        Püpa
                    </NavLink>
                </ListItem>
                <ListItem className="role-button">
                    <NavLink
                        to={"/roles"}
                        >
                        {props.enableRolesButton ? "Change role" : null}
                    </NavLink>
                </ListItem>
                <ListItem className="logout-button">
                    <NavLink
                        to={"/"}
                        >
                        {props.enableLogoutButton ? "Log out" : null}
                    </NavLink>
                </ListItem>
            </UnorderedList>
        </>
    );
}
