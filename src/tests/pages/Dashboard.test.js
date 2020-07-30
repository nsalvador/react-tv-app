import React from 'react';
import { shallow } from 'enzyme';

import * as DashboardContext from '../../context/dashboard';
import DashboardPage from '../../pages/Dashboard';
import subscriptions from '../fixtures/shows';

describe('Component: <DashboardPage />', () => {
	it('1. Should successfully render component with an empty subscriptions array', () => {
		const subscriptions = [];
		jest
			.spyOn(DashboardContext, 'useDashboardContext')
			.mockImplementation(() => ({ subscriptions }));

		const wrapper = shallow(<DashboardPage />);
		expect(wrapper).toMatchSnapshot();

		const p = wrapper.find('p');
		expect(p.text()).toBe('No Subscriptions. Start a Search');
	});

	it('2. Should successfully render component with a non-empty subscriptions array', () => {
		jest
			.spyOn(DashboardContext, 'useDashboardContext')
			.mockImplementation(() => ({ subscriptions }));

		const wrapper = shallow(<DashboardPage />);
		expect(wrapper).toMatchSnapshot();

		const ol = wrapper.find('ol');
		expect(ol.children()).toHaveLength(subscriptions.length);

		const seriesNames = wrapper.find('li').map((node) => {
			const nodeSeriesName = node.text();
			return nodeSeriesName.substr(0, nodeSeriesName.length - 1);
		});
		expect(seriesNames).toEqual(
			subscriptions.map(({ seriesName }) => seriesName)
		);
	});
});
