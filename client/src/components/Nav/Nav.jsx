/* <Nav /> */

import React from 'react';
import Menu from '../Menu/Menu';

const Nav = () => {
    return (
        <div className="nav title-bar">
            <h1 className="nav__logo title-bar-text">
                <a href="/" className="nav__logo--link">Let's Jam</a>
            </h1>
            <ul className="nav__list">
                <li className="nav__item  title-bar-text">
                    <a href="/feed" className="nav__link">Feed</a>
                </li>
                <li className="nav__item  title-bar-text">
                    <a href="/search" className="nav__link">Search</a>
                </li>
                {/*<li className="nav__item  title-bar-text">
                    <a href="/add-post" className="nav__link">Post</a>
    </li>*/}
                <li className="nav__item  title-bar-text">
                    <a href={`/user`} className="nav__link">My profile</a>
                </li>
                <li className="nav__item nav__item--menu">
                    <span className="title-bar-text">Menu</span>
                    <Menu />
                </li>
            </ul>
        </div>
    );
};

export default Nav;