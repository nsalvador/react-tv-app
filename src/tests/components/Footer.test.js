import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Footer from '../../components/Footer';

it('should render Footer correctly', () => {
	const wrapper = shallow(<Footer />);
	expect(wrapper).toMatchSnapshot();
	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Footer />);
	// expect(renderer.getRenderOutput()).toMatchSnapshot();
});
