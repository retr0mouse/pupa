import React, { ReactElement, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { QuizAPI } from "../apis/QuizAPI";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    justify-content:space-around;
    gap: 200px;

    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;

    p {
        font-size: 48px;
        font-family: 'Open Sans', sans-serif;
    }
`;
const TeacherButton = styled.button`
    width: 500px;
    height: 500px;

    transition: transform .2s;
    :hover {
        transform: scale(1.2);
    }

    transition: transform .2s;
    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    border: none;
    
`;

const StudentButton = styled.button`
    width: 500px;
    height: 500px;
    transition: transform .2s;
    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    border: none;

    :hover {
        transform: scale(1.2);
    }
`;    
export function RolePage() {
    return(
        <>
            <Navigation/>
            <ButtonsContainer>
               
                <NavLink to="/student">
                    <StudentButton>
                        <img src={"../images/student-svgrepo-com (1).svg"} alt={"tudeng pilt"}/>
                    </StudentButton>
                </NavLink>
                <p></p>
                <NavLink to="/teacher">
                    <TeacherButton>
                        <img src="../images/student-svgrepo-com (1).svg"/>
                    </TeacherButton>
                </NavLink>
            </ButtonsContainer>
        </>
    );
}
