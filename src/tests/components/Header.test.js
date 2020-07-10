import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Component: <Header />', () => {
	it('should successfully render component', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper).toMatchSnapshot();
	});
});
