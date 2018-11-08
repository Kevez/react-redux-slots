const initialState = [
	{
		id: 0,
		symbols: ['A', 'B', 'C']
	},
	{
		id: 1,
		symbols: ['A', 'B', 'C']
	},
	{
		id: 2,
		symbols: ['A', 'B', 'C']
	}
];

const reels = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_REELS':
			return state.map((reel, idx) => {
				return {...reel, symbols: action.newReels[idx]};
			});
		default:
			return state;
	}
};

export default reels;