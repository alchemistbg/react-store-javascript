import "./Header.scss";

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import Navigation from "./Navigation";

import CartContext from "./../../context/CartContext";

function Header() {
	const [{ cart }, dispatch] = useContext(CartContext);

	const handleOnLoad = () => {
		if (JSON.parse(localStorage.getItem("cartData")) !== null) {
			dispatch({
				type: "LOAD_CART_FROM_STORAGE",
				item: JSON.parse(localStorage.getItem("cartData")),
			});
		}
	};

	return (
		<header>
			<div className="site-header" onLoad={handleOnLoad}>
				<Link to="/react-store">
					<Logo />
				</Link>
				<Navigation />
			</div>
		</header>
	);
}

export default Header;
