import './ProductList.scss';

import React, { useState, useContext } from 'react'

import ProductCard from './../ProductCard/ProductCard';
import SortContext from './../../context/SortContext';

function ProductList(props) {
    document.title = "Compass Store";
    let { products } = props;

    const [{ sort }, dispatch] = useContext(SortContext);

    let [sortCriteria, setSortCriteria] = useState(sort.criteria);
    let [sortDirection, setSortDirection] = useState(sort.direction);

    const handleOnLoad = () => {
        if (localStorage.getItem('sortData') !== null) {
            dispatch({
                type: "LOAD_SORT_FROM_STORAGE",
                data: localStorage.getItem("sortData")
            });
        }
        setSortCriteria(sort.criteria);
        setSortDirection(sort.direction);
    }

    const sortProductsList = () => {
        products.sort((p1, p2) => {
            if (sortDirection === "desc") {
                return p2[sortCriteria] - p1[sortCriteria];
            }
            else {
                return p1[sortCriteria] - p2[sortCriteria];
            }
        });
    }
    sortProductsList();

    const handleOnSelectChange = (event) => {
        const [criteria, direction] = event.target.value.split("-");
        setSortCriteria(criteria);
        setSortDirection(direction);
        dispatch({
            type: 'SORT',
            criteria: criteria,
            direction: direction
        });
        sortProductsList();
    }

    return <div className="product-list-container" onLoad={handleOnLoad}>
        <h1 className="list-title">Our Products</h1>
        <div className="sort-wrapper">
            <label className="sort-label" htmlFor="sort-options">Sort by:</label>
            <select value={sortCriteria + '-' + sortDirection} className="sort-options" id="sort-options" onChange={handleOnSelectChange}>
                <option value="timesSold-desc">by Popularity (Desc)</option>
                <option value="timesSold-asc">by Popularity (Asc)</option>
                <option value="price-desc">by Price (Desc)</option>
                <option value="price-asc">by Price (Asc)</option>
            </select>
            <div htmlFor="sort-options" className="arrow"><i className="fas fa-sort-down"></i></div>
        </div>
        <div className="product-list">
            {
                products.map((product) => <ProductCard key={product.id} product={product} />)
            }

        </div>
    </div>;
}

export default ProductList;