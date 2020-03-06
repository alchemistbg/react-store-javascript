import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Quantity from './Quantity';

describe('', () => {
    test('should have disabled decrement button', () => {
        const { getByTestId } = render(
            <Quantity productQty={1}>
            </Quantity>
        );

        const decrBtn = getByTestId("decr");
        expect(decrBtn).toHaveAttribute('disabled');
        const incrBtn = getByTestId("incr");
        expect(incrBtn).not.toHaveAttribute('disabled');
    });
    test('should have enabled decrement button', () => {
        const { getByTestId } = render(
            <Quantity productQty={2}>
            </Quantity>
        );

        const decrBtn = getByTestId("decr");
        expect(decrBtn).not.toHaveAttribute('disabled');
        const incrBtn = getByTestId("incr");
        expect(incrBtn).not.toHaveAttribute('disabled');
    });
});