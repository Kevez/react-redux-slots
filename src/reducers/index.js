import {combineReducers} from 'redux';
import player from './player';
import reels from './reels';

const reducer = combineReducers({
	player,
	reels
});

export default reducer;