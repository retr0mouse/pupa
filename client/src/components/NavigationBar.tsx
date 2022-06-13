import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

let activeClassName = "current"

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
/* 
    *, *::before, *::after {
      box-sizing: inherit;
      padding: 0;
      margin: 0;
    }
    
    .current {
        border-bottom: 4px solid white;
    } */
`;

const UnorderedList = styled.ul`
    border-radius: 40px;
    list-style: none;
    display: flex;
    background-color: white;
    margin: 0 0 30px 0;
    padding: 0;
`;

export function Navigation() {
    return (
        <nav>
            <UnorderedList>
                <ListItem>
                    <NavLink
                        className={
                            ({ isActive }) => isActive ? activeClassName : undefined
                        }
                        to="/">
                        Püpa
                    </NavLink>
                </ListItem>
                {/* <ListItem>
                    <NavLink
                        className={
                            ({ isActive }) => isActive ? activeClassName : undefined
                        }
                        to="/quizzes">
                        Quizzes
                    </NavLink>
                </ListItem> */}
            </UnorderedList>
        </nav>
    );
}
