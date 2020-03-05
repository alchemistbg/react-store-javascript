import './ProductTable.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import ProductTableHeader from './ProductTableHeader';

import Quantity from './../common/Quantity/Quantity';
import Image from './../common/Image/Image';
import Button from './../common/Button/Button';

const ProductTable = (props) => {

    const { productTable, handleDecrement, handleIncrement } = props;

    return <ul className="product-list-table">
        <ProductTableHeader />
        {
            productTable.map((product) => {
                return <li key={product.id.id || product.id} className="product-item data-row">
                    <span className="product-item-title">
                        <Link to={"products/" + product.id}>
                            <Image image={product.images[0]} imageClass="cart-image" />
                            <div className="title-info">
                                <span>Manufacturer: {product.manufacturer}</span>
                                <span>{product.name}</span>
                                <span>Size: {product.productSize}</span>
                            </div>
                        </Link>
                        <Button isDisabled={false} className="form-button button-delete product-table" onClick={() => props.handleRemoveFromCart(product)}
                            icon={<i className="far fa-trash-alt"></i>} btnText={"Remove this product"}>

                        </Button>
                    </span>
                    <span className="product-item-sprice">
                        {product.price.toFixed(2)} DKK
                    </span>
                    <Quantity
                        product={product}
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                    />
                    <span className="product-item-tprice">
                        {product.totalPrice} DKK
                    </span>
                </li>
            })
        }
    </ul >
};

export default ProductTable;