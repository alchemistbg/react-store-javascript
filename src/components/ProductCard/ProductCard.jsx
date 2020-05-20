import "./ProductCard.scss";

import React from "react";
import { Link } from "react-router-dom";

import Image from "./../common/Image/Image";

function ProductCard(props) {
	const { product } = props;

	return (
		<Link
			className="product-card"
			to={`/react-store/products/${product.id}`}
		>
			<span className="card-inner">
				<div className="details">Details</div>
				<Image image={product.images[0]} imageClass="card-media" />
				<span className="card-meta">
					<p className="manufacturer">{product.manufacturer}</p>
					<h6>{product.name}</h6>
				</span>
				<span className="card-footer">
					<h6 className="price">{product.price} DKK</h6>
				</span>
			</span>
		</Link>
	);
}

export default ProductCard;
