import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from '../../pages/Search';

describe('Component: <SearchPage />', () => {
	it('should render SearchPage correctly', () => {
		const wrapper = shallow(<SearchPage />);
		expect(wrapper).toMatchSnapshot();
	});
});
