/* <Button
        type={this.state.type}
        value=""
    />
*/

import React from 'react';

const Button = (props) => {
    return (
        <input
            type="button"
            className={`button button--${props.type}`}
            value={props.value}
            onClick={props.onClick}
        />
    );
};

export default Button;