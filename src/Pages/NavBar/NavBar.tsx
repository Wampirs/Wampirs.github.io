import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

import Item from './NavBarItem';
import './NavBar.css';


const NavBar = () => {
    return (
        <>
            <nav className="nav">
                <NavLink to={'/'} >
                    <p>Home</p>
                </NavLink>

                <NavLink to={'/projects'}>
                    <p>Projects</p>
                </NavLink>
            </nav>
            <Outlet/>
        </>
    )
};

export default NavBar;