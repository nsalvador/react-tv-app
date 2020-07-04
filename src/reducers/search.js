const searchReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SHOWS':
			return [...action.shows];
		default:
			return state;
	}
};

export default searchReducer;
