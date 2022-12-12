import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

import './Layout.css';


const NavBar = (Navigation: { NavItems:Array<{ name: string, path: string, component: JSX.Element, icon: string }>} ) => {

    const CreateNavLinks: any = () => Navigation.NavItems.map((NavItem: { name: string, path: string, icon: string }) =>
        <NavLink to={NavItem.path} className="NavItem" key={NavItem.name}>
            <p className="Navitem Text">{NavItem.name}</p>
            <div className="NavItem lineDiv" />
        </NavLink>)
    return (
        <div className="View">
            <nav className="NavBar">
                <CreateNavLinks/> 
            </nav>
            <Outlet />
        </div>
    )
};

export default NavBar;