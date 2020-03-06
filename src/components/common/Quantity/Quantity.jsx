import './Quantity.scss';

import React from 'react';

import Button from './../Button/Button';

const Quantity = (props) => {

    const { product, productQty, handleDecrement, handleIncrement } = props;

    let qty;
    if (product) {
        qty = product.productQty;
    } else {
        qty = productQty;
    }
    return <span className="product-item-qty">

        {
            qty < 2 ? (
                <Button
                    dataTestId={"decr"}
                    isDisabled={true}
                    className="form-button product-table"
                    onClick={() => handleDecrement(product)}
                    btnText={<i className="far fa-minus-square"></i>}
                />
            ) : (
                    <Button
                        dataTestId={"decr"}
                        isDisabled={false}
                        className="form-button product-table"
                        onClick={() => handleDecrement(product)}
                        btnText={<i className="far fa-minus-square"></i>}
                    />
                )
        }
        <span className="qty-number">{qty}</span>
        <Button
            dataTestId={"incr"}
            isDisabled={false}
            className="form-button product-table"
            onClick={() => handleIncrement(product)}
            btnText={<i className="far fa-plus-square"></i>} />

    </span>
}

export default Quantity;