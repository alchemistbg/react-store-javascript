import './Header.scss';

import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import Logo from './Logo';
import Navigation from './Navigation';

import CartContext from './../../context/CartContext';

function Header() {

    const [{ cart }, dispatch] = useContext(CartContext);

    const handleOnLoad = () => {
        if (localStorage.getItem('myCart') !== null) {
            dispatch({
                type: "LOAD_DATA_FROM_STORAGE",
                item: localStorage.getItem("myCart")
            });
        }
    }

    return <header>
        <div className="site-header" onLoad={handleOnLoad}>
            <Link to="/">
                <Logo />
            </Link>
            <Navigation />
        </div>
    </header >
}

export default Header;