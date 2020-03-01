import React, { useContext } from 'react';

import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

function Navigation() {

    const [{ cart }] = useContext(CartContext);
    const calcCartItemsNumber = () => {
        let cartItems = cart.reduce((acc, curr) => {
            return acc + curr.productQty
        }, 0);
        return cartItems;
    }

    return (
        <nav className="nav nav-header">
            <ul className='nav-list'>
                <li className='nav-item cart'>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart" htmlFor="cart-cb">
                            <span className="cart-size">{calcCartItemsNumber()}</span>
                        </i>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;