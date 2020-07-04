const subscriptionsReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_SHOW':
			return [...state, action.show];
		case 'POPULATE_SUBSCRIPTIONS':
			return action.subscriptions;
		default:
			return state;
	}
};

export default subscriptionsReducer;
