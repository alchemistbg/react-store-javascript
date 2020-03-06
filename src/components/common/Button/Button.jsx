import './Button.scss';

import React from 'react';

function Button(props) {
    const { dataTestId, isDisabled, className, onClick: onClickFunction, btnText, icon } = props;

    return (
        <button
            data-testid={dataTestId}
            disabled={isDisabled}
            className={className}
            onClick={onClickFunction}
        >
            {icon} {btnText}
        </button>
    )
}

export default Button;
