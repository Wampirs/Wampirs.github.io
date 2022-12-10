import React from 'react';
import Item from './NavBarItem';
import './NavBar.css';


const navigation = {
    links: [
        { name: "About Me ", to: "/about" },
        { name: "Blog", to: "/blog" },
        { name: "Developement", to: "/dev" },
        { name: "Graphic Design", to: "/design" },
        { name: "Contact", to: "/contact" },
    ]
}

const NavBar = () => {
    const { links } = navigation;
    const NavBtns: any = () => links.map((link: { name: string, to: string }) => <Item name={link.name} link={link.to} />);
    return (
        <div className="NavBar">
            <NavBtns />
        </div>
    )
};

export default NavBar;