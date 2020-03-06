import React from 'react';
import { shallow } from 'enzyme';

import db from '../../App/db.json';
import Image from './Image';

describe('Tests for the Image component', () => {
    test('should have 1 img tag', () => {
        const wrapper = shallow(<Image />);
        expect(wrapper.find("img")).toHaveLength(1);
    });

    test('should have loaded first product image', () => {
        const wrapper = shallow(<Image image={db.products[0].images[0]} imageClass="card-media" />);
        const img = wrapper.find("img");
        expect(img.props()).toHaveProperty("src", "/static/images/37861608_l-1.jpg");
    });
});