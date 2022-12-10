import React from 'react';
import './NavBarItem.css';

const NavBarItem = (props: {
    name: string,
    link: string,
    //img: string
}) => {
    return (
        <a className = "NavBarRef" href = {props.link}>
            <div className="NavBarItem">
                {props.name}
            </div>
        </a>
    );
}

export default NavBarItem;