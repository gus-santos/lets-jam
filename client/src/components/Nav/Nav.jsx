/* <Nav /> */

import React from 'react';
import Menu from '../Menu/Menu';

const Nav = (props) => {
    return (
        <div className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/" className="nav__link">Feed</a>
                </li>
                <li className="nav__item">
                    <a href="/search" className="nav__link">Search</a>
                </li>
                <li className="nav__item">
                    <a href="/faq" className="nav__link">Post</a>
                </li>
                <li className="nav__item">
                    <a href={`/user/${props.id}`} className="nav__link">My profile</a>
                </li>
                <li className="nav__item">
                    <Menu />
                </li>
            </ul>
        </div>
    );
};

export default Nav;