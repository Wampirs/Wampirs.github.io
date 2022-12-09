import React from 'react';
import './NavBarItem.css';

const NavBarItem = (props: {
    name: string,
    link: string,
    //img: string
}) => {
    return (
        <div className="NavBarItem">
            <a href={props.link}>
                {props.name}
            </a>
        </div>
  );
}

export default NavBarItem;