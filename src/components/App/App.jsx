import db from "./db.json";
import "./App.scss";

import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

import ProductList from "./../ProductList/ProductList";
import ProductDetails from "./../ProductDetails/ProductDetails";
import Cart from "./../Cart/Cart";

import { CartProvider } from "./../../context/CartContext";
import { cartReducer, initialCartState } from "./../../reducers/CartReducer";
import { SortProvider } from "./../../context/SortContext";
import { sortReducer, initialSortState } from "./../../reducers/SortReducer";

function App() {
	const useCartState = useReducer(cartReducer, initialCartState);
	const useSortState = useReducer(sortReducer, initialSortState);

	return (
		<div className="site-container">
			<Router>
				<CartProvider value={useCartState}>
					<SortProvider value={useSortState}>
						<Header />
						<main className="site-main">
							<Switch>
								<Route
									exact
									path="/react-store"
									render={() => (
										<ProductList products={db.products} />
									)}
								/>
								<Route
									exact
									path="/react-store/products/:id"
									component={ProductDetails}
								/>
								<Route
									exact
									path="/react-store/cart"
									component={Cart}
								/>
							</Switch>
						</main>
						<Footer />
					</SortProvider>
				</CartProvider>
			</Router>
		</div>
	);
}

export default App;
