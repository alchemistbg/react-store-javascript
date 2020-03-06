import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('check home page content', () => {
	test("check if 'App' component renders without crashing", () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});

	test('check if title is "Compass Store"', () => {
		expect(global.window.document.title).toBe('Compass Store');
	});
});
