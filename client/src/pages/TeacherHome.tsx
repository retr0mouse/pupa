import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserAPI } from "../apis/UserAPI";
import { Navigation } from "../components/NavigationBar";

const Container = styled.div`
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    align-items: center;
    display: flex;
    flex-direction: column;
    
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

    h1 {
        font-family: 'Open Sans', sans-serif;
        font-size: 44px;
    }

    h2 {
        margin-top: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 36px;
    }
`;

export function TeacherHome() {
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        getUser();
    }, []);

    return (<>
        <Navigation
            link="/teacher"
            enableRolesButton={true}
            enableLogoutButton={true}
        />
        <Container>
            <h1>Teacher Home Page</h1>
            <h2>User id: {userId}</h2>
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

    async function getUser() {
        try {
            const user = await UserAPI.GetUser();
            setUserId(user.id);
        } catch(error) {
            throw new Error("error" + error);
        }
    }
} 