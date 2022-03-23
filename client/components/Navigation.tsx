import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

let activeClassName = "current"

const ListItem = styled.li`
    padding: 20px;

    a{
        color: white;
        text-decoration: none;
    }

    *, *::before, *::after {
      box-sizing: inherit;
      padding: 0;
      margin: 0;
    }
    
    .current {
        border-bottom: 4px solid white;
    }
`;

const UnorderedList = styled.ul`
    list-style: none;
    display: flex;
    background-color: black;
    margin-bottom: 20px;
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
                        Home
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink
                        className={
                            ({ isActive }) => isActive ? activeClassName : undefined
                        }
                        to="/quizzes">
                        Quizzes
                    </NavLink>
                </ListItem>
            </UnorderedList>
        </nav>
    );
}
