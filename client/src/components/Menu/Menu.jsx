/* <Menu /> */

import React from 'react';

const Menu = (props) => {
    return (
        <div className="menu">
            <ul className="menu__link-wrapper">
                <li className="menu__item">
                    <a href="/settings" className="menu__link">Settings</a>
                </li>
                <li className="menu__item">
                    <a href="/faq" className="menu__link">FAQ</a>
                </li>
                <li className="menu__item">
                    <a href="/about" className="menu__link">About</a>
                </li>
                <li className="menu__item">
                    <a href="/contact" className="menu__link">Contact</a>
                </li>
            </ul>

            <p className="menu__copyright">&copy; 2020 G. Santos</p>
        </div>
    );
};

export default Menu;