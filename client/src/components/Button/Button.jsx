/* <Button
        type={this.state.type}
        value=""
    />
*/

import React from 'react';

const Button = (props) => {
    return (
        <button
            className={`button button--${props.type}`}
            type={props.type}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
};

export default Button;