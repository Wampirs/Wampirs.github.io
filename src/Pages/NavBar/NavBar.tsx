import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

import './NavBar.css';


const NavBar = (Navigation: { NavItems:Array<{ name: string, path: string, component: JSX.Element, icon: string }>} ) => {

    const CreateNavLinks: any = () => Navigation.NavItems.map((NavItem: { name: string, path: string, icon: string }) =>
        <NavLink to={NavItem.path}>
            <p>{NavItem.name}</p>
        </NavLink>)
    return (
        <>
            <nav className="NavBar">
                <CreateNavLinks/> 
            </nav>
            <Outlet/>
        </>
    )
};

export default NavBar;