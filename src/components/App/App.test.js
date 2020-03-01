import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('check home page content', () => {
	const { getByText } = render(<App />);
	test('Has "Our Products" text', () => {

		const headerText = getByText(/Our products/i);
		expect(headerText).toBeInTheDocument();
	});
});

describe('CHeck', () => {
	const { getByText } = render(<App />);
	it('should ', () => {

	});

});