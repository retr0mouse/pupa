import React from "react";
import { NavLink } from "react-router-dom";

export function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/quizzes">Quizzes</NavLink></li>
            </ul>
        </nav>
    );
}
