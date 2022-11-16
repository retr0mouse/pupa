import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigation } from "../components/NavigationBar";
import styled from "styled-components";
import studentImage from '../../images/student.svg';
import teacherImage from '../../images/teacher.svg';

const Container = styled.div`
    justify-content:space-around;
    gap: 200px;

    display: flex;
    align-items: center;

    .studentImage {
        width: 250px;
    }

    .teacherImage {
        width: 250px;
    }
`;
const Button = styled.button`
    padding: 70px;
    min-width: 100px;
    min-height: 100px;
    max-width: 500px;
    max-height: 500px;

    transition: transform .2s;
    :hover {
        transform: scale(1.2);
    }

    background: #5B81E2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    border: none;
`;  

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 50px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 70px;
        font-family: 'Open Sans', sans-serif;
    }
`;

interface Props {
    isLoggedIn: boolean
}

export function RoleSelection(props: Props) {
    const history = useNavigate();
    useEffect(() => {
        !props.isLoggedIn ? history("/") : null;
    }, [])

    return(
        <>
            <Navigation
                link="/roles"
                enableRolesButton={false}
                enableLogoutButton={true}
            />
            <MainContainer>
                <h1>Choose a role</h1>
                <Container>
                    <ButtonContainer>
                        <NavLink to="/student">
                            <Button>
                                <img className="studentImage" src={studentImage} alt="" />
                            </Button>
                        </NavLink>
                        <h1>Student</h1>
                    </ButtonContainer>
                    <ButtonContainer>
                        <NavLink to="/teacher">
                            <Button>
                                <img className="teacherImage" src={teacherImage} alt="" />
                            </Button>
                        </NavLink>
                        <h1>Teacher</h1>
                    </ButtonContainer>
                    
                </Container>
            </MainContainer>
            
        </>
    );
}
