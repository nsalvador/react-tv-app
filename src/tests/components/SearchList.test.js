import React from 'react';
import { shallow } from 'enzyme';

import * as DashboardContext from '../../context/dashboard';
import * as SearchContext from '../../context/search';
import SearchList from '../../components/SearchList';
import shows from '../fixtures/shows';

describe('Component: <SearchList />', () => {
	it('1. Should render component when search is unsuccessful', () => {
		const mockDispatch = jest.fn();
		const error = 'Not Found';
		const shows = [];
		jest
			.spyOn(SearchContext, 'useSearchContext')
			.mockImplementation(() => ({ error, shows }));
		jest
			.spyOn(DashboardContext, 'useDashboardContext')
			.mockImplementation(() => ({ dispatch: mockDispatch }));
		const wrapper = shallow(<SearchList />);
		expect(wrapper).toMatchSnapshot();
		const p = wrapper.find('p');
		expect(p.text()).toBe(error);
	});

	it('2. Should render component when search is successful', () => {
		const mockDispatch = jest.fn();
		const error = '';
		jest
			.spyOn(SearchContext, 'useSearchContext')
			.mockImplementation(() => ({ error, shows }));
		jest
			.spyOn(DashboardContext, 'useDashboardContext')
			.mockImplementation(() => ({ dispatch: mockDispatch }));

		const wrapper = shallow(<SearchList />);
		expect(wrapper).toMatchSnapshot();

		const ol = wrapper.find('ol');
		expect(ol.children()).toHaveLength(shows.length);

		const showNames = wrapper.find('li').map((node) => {
			const nodeShowName = node.text();
			return nodeShowName.substr(0, nodeShowName.length - 1);
		});
		expect(showNames).toEqual(shows.map(({ seriesName }) => seriesName));
	});
});
