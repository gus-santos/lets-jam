
import React from 'react';

const BSOD = () => {
    return (
        <div className="bsod title-bar-text">
            <h1 className="bsod__title">Windows</h1>
            <p className="bsod__text">A fatal exception 404 has occurred at 001D:0000FE84. Your computer will be terminated.</p>
            <ul className="bsod__list">
                <li className="bsod__item">*     Press any key to terminate your computer</li>
                <li className="bsod__item">* Press CTRL+ALT+DEL again to restart your computer. You will lose all saved information in all applications.</li>
            </ul>
            <p className="bsod__text">Press any key to continue _</p>
        </div>
    );
};

export default BSOD;