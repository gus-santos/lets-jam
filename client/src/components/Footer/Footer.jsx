import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            <ul className="footer__link-wrapper">
                <li className="footer__list-item">
                    <a href="/about" className="footer__link">About</a>
                </li>
                <li className="footer__list-item">
                    <a href="/faq" className="footer__link">FAQ</a>
                </li>
                <li className="footer__list-item">
                    <a href="/contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <p className="footer__copyright">© 2020 G. Santos</p>
        </div>
    );
};

export default Footer;