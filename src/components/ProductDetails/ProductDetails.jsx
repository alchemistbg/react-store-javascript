import db from '../App/db.json';
import './ProductDetails.scss';

import React, { Fragment, useState, useContext } from 'react';

import Image from './../common/Image/Image';
import ImageThumbs from './../ImageThumbs/ImageThumbs';
import Size from './../Size/Size';
import Button from './../common/Button/Button';

import Quantity from './../common/Quantity/Quantity';
import CartContext from './../../context/CartContext';

import { showToast } from './../../utils/helpers';

function ProductDetails(props) {

    const { id } = props.match.params;

    const product = db.products.filter((prod) => {
        return prod.id === +id;
    })[0];

    document.title = `${product.manufacturer} | ${product.name}`;

    let [productQty, setProductQty] = useState(1);

    const [{ cart }, dispatch] = useContext(CartContext);

    const handleDecrement = () => {
        if (productQty > 1) {
            productQty -= 1;
            setProductQty(productQty);
        }
    }

    const handleIncrement = () => {
        productQty += 1;
        setProductQty(productQty);
    }

    let [productSize, setProductSize] = useState("");
    const handleSizeSelection = (size) => {
        setProductSize(size);
        document.getElementById('size-warning').classList.remove('visible');
        Array.from(document.getElementsByClassName('size-label')).map(elem => elem.classList.remove('selected'))
        document.getElementById(`${size}`).classList.add('selected');
    }

    const handleAddToCartClick = () => {
        if (!productSize) {
            document.getElementById('size-warning').classList.add('visible');
            showToast('simpleError', {
                title: "Please select a size!"
            });
            return;
        }
        showToast('success', {
            title: `${product.name} added successfully to your cart.`
        });
        dispatch({
            type: 'ADD_TO_CART',
            item: product,
            productQty,
            productSize
        });
    }

    let [imageToShow, setImageToShow] = useState(product.images[0]);
    const handleThumbImageClick = (image) => {
        setImageToShow(image);
    }

    return <Fragment>
        <div className="product-details">
            <h3 className="manufacturer">{product.manufacturer}</h3>
            <span className="images">
                <Image image={imageToShow} imageClass="image-main" />
                <ImageThumbs images={product.images} handleThumbImageClick={handleThumbImageClick} />
            </span>
            <span className="wrapper">
                <span className="info-wrapper">
                    <h5>{product.name}</h5>
                    <h4>{product.price} DKK</h4>
                    <h6>Description</h6>
                    <p>{product.description}</p>
                    <Size sizes={product.sizes} handleSizeSelection={handleSizeSelection} />
                </span>
                <span className="qty-wrapper">
                    <Quantity
                        productQty={productQty}
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                    />
                    <Button isDisabled={false} className="form-button cart" onClick={handleAddToCartClick} btnText={"Add to cart"} />
                </span>
            </span>
        </div>
    </Fragment>;
}

export default ProductDetails;