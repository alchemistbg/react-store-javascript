import './ProductList.scss';

import React from 'react'

import ProductCard from './../ProductCard/ProductCard';

function ProductList(props) {

    document.title = "Compass Store";

    const { products } = props;

    return <div className="product-list">
        <h1 className="list-title">Our Products</h1>
        {
            products.map((product) => <ProductCard key={product.id} product={product} />)
        }
    </div>;
}

export default ProductList;