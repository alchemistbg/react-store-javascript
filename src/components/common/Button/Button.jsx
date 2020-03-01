import './Button.scss';

import React from 'react';

function Button(props) {
    const { isDisabled, className, onClick: onClickFunction, btnText, icon } = props;
    // console.log(isDisabled)
    return (
        <button
            type="button"
            disabled={isDisabled || false}
            className={className}
            onClick={onClickFunction}
        >
            {icon} {btnText}
        </button>
    )
}

export default Button;
