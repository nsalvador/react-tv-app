const subscriptionsReducer = (state, action) => {
	switch (action.type) {
		case 'REMOVE_SHOW':
			return state.filter(({ id }) => id !== action.id);
		case 'ADD_SHOW':
			return [...state, action.show];
		case 'POPULATE_SUBSCRIPTIONS':
			return action.subscriptions;
		default:
			return state;
	}
};

export default subscriptionsReducer;
