import './Size.scss';

import React from 'react';

function Size(props) {

    const { sizes, handleSizeSelection } = props;

    return (
        <div className="size-list">
            <h6 className="size-list-title">This product is available in:</h6>
            <div className="label-list">
                {
                    sizes.map((size) => {
                        return <label key={size} className="size-label" id={size} onClick={() => handleSizeSelection(size)}>
                            <button className="size-radio" type="radio" name="size-radio" id={size}></button>
                            <span className="size-item" htmlFor="size-radio">{size}</span>
                        </label>
                    })
                }
            </div>
            <div id="size-warning">Please select a size</div>
        </div>
    )
}

export default Size;