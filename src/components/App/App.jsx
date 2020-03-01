import db from './db.json';
import './App.scss';

import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ProductList from './../ProductList/ProductList';
import ProductDetails from './../ProductDetails/ProductDetails';
import Cart from './../Cart/Cart';

import { CartProvider } from '../../context/CartContext';
import { cartReducer, initialCartState } from '../../reducers/CartReducer';

function App() {

	const useCartState = useReducer(cartReducer, initialCartState);

	return (
		document.title = "Compass Store",
		<div className="site-container">
			<Router>
				<CartProvider value={useCartState}>
					<Header />
					<main className="site-main">
						<Switch>
							<Route exact path='/' render={() => <ProductList products={db.products} />} />
							<Route exact path="/products/:id" component={ProductDetails} />
							<Route exact path="/cart" component={Cart} />
						</Switch>
					</main>
					<Footer />
				</CartProvider>
			</Router>
		</div>
	);
}

export default App;
