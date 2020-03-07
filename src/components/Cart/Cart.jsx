import './Cart.scss';

import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';

import CartContext from './../../context/CartContext';

import ProductsTable from './../ProductsTable/ProductTable';
import { calcCartTotalSum } from './../../utils/helpers';
import Button from './../common/Button/Button';

const Cart = () => {
    document.title = "Compass Store | Cart";

    const [{ cart }, dispatch] = useContext(CartContext);

    const handleDecrement = (product) => {
        dispatch({
            type: 'DECREMENT',
            item: product
        });
    }

    const handleIncrement = (product) => {
        dispatch({
            type: 'INCREMENT',
            item: product
        });
    }

    const handleRemoveFromCart = (product) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            item: product
        });
    }

    const handleCheckout = () => {
        dispatch({
            type: 'CHECKOUT'
        })
        let totalPrice = 0;
        cart.map((product) => {
            totalPrice += +product.totalPrice;
            return totalPrice;
        });
    }

    return (

        <div className="cart-wrapper">
            {
                cart.length !== 0 ? (
                    <Fragment>
                        <h1>Your shopping cart</h1>
                        <ProductsTable
                            source="cart"
                            productTable={cart}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleCheckout={handleCheckout}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                        />

                        <div className="total-price-wrapper">
                            <h4>
                                <span className="text">Total Price: </span>
                                <span className="price">{calcCartTotalSum(cart).toFixed(2)} DKK</span>
                            </h4>
                            <Button isDisabled={false} className="form-button cart" onClick={handleCheckout} btnText={"Proceed to Checkout"} />
                        </div>
                    </Fragment>
                ) : (
                        <Fragment>
                            <h1>Your cart is empty</h1>
                            <Link to="/">
                                <h4>Start shopping</h4>
                            </Link>
                        </Fragment>
                    )
            }


        </div>
    );
}

export default Cart;
