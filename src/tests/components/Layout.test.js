import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Layout from '../../components/Layout';

it('should render Layout correctly', () => {
	const renderer = new ReactShallowRenderer();
	renderer.render(<Layout />);
	expect(renderer.getRenderOutput()).toMatchSnapshot();
});
