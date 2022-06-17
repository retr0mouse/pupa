import React, { ReactElement, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { QuizAPI } from "../apis/QuizAPI";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import styled from "styled-components";
import studentImage from '../../images/student.svg';
import teacherImage from '../../images/teacher.svg';

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
    .studentImage {
        width: 380px;
    }

    .teacherImage {
        width: 350px;
    }
`;
const TeacherButton = styled.button`
    width: 500px;
    height: 500px;

    transition: transform .2s;
    :hover {
        transform: scale(1.2);
    }

    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    border: none;
    
`;

const StudentButton = styled.button`
    width: 500px;
    height: 500px;

    transition: transform .2s;
    :hover {
        transform: scale(1.2);
    }

    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    border: none;
`;    
export function RoleSelection() {
    return(
        <>
            <Navigation
                link="/"
                isEnabled={false}
            />
            <ButtonsContainer>
                <NavLink to="/student">
                    <StudentButton>
                        <img className="studentImage" src={studentImage} alt="" />
                    </StudentButton>
                </NavLink>
                <p></p>
                <NavLink to="/teacher">
                    <TeacherButton>
                        <img className="teacherImage" src={teacherImage} alt="" />
                    </TeacherButton>
                </NavLink>
            </ButtonsContainer>
        </>
    );
}
