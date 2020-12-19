/* <Menu /> */

import React from 'react';

const Menu = (props) => {
    return (
        <div className="menu window">
            <ul className="menu__link-wrapper">
                <li className="menu__item">
                    <a href="https://bouncebackbc.ca/" className="menu__link">Mental health</a>
                </li>
                <li className="menu__item">
                    <a href="/settings" className="menu__link">Settings</a>
                </li>
                <li className="menu__item">
                    <a href="/faq" className="menu__link">FAQ</a>
                </li>
                <li className="menu__item">
                    <a href="/contact" className="menu__link">Contact</a>
                </li>
                <li className="menu__item">
                    <a href="/about" className="menu__link">About</a>
                </li>
            </ul>

            <p className="menu__footer">&copy; 2020 G. Santos</p>
            <p className="menu__footer">Site best viewed in <a href="http://internetexplorer.com/">Microsoft Internet Explorer</a> in 800x600 resolution</p>
        </div>
    );
};

export default Menu;