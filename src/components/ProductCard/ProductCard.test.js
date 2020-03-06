import React from 'react';
import { shallow } from 'enzyme';

import db from './../App/db.json';
import ProductCard from './ProductCard';

describe('if ProductCards tag are loaded correctly', () => {
    const wrapper = shallow(<ProductCard product={db.products[0]} />);
    test("should contains product's details", () => {
        const detailsDiv = <div className="details">Details</div>;
        expect(wrapper).toContainReact(detailsDiv);
    });
    test("should contains product's manufacturer", () => {
        const manufacturer = <p className="manufacturer">{db.products[0].manufacturer}</p>;
        expect(wrapper).toContainReact(manufacturer);
    });
});