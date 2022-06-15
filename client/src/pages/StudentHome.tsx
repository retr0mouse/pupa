import React, { ReactElement, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { QuizAPI } from "../apis/QuizAPI";
import { Message } from "../components/Message";
import { Navigation } from "../components/NavigationBar";
import styled from "styled-components";
import { PackFindingBox } from "../components/PackFindingBox";


export function StudentHome() {
    return (<>
                <Navigation/>
                <PackFindingBox 
                    onTyped={() => null} 
                    onClicked={() => null}
                ></PackFindingBox>
               
    
            </>);
} 


