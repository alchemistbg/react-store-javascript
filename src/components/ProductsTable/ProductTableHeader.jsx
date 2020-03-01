import React from 'react'

const ProductTableHeader = (props) => {
    return <li className="product-item header">
        <span className="product-item-title">
            Product details
        </span>
        <span className="product-item-sprice">
            Unit price
        </span>
        <span className="product-item-qty">
            Quantity
        </span>
        <span className="product-item-tprice">
            Total price
        </span>
    </li>
}

export default ProductTableHeader;