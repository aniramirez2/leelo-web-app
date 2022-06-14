import { HYDRATE } from 'next-redux-wrapper';
import { BOOK_UPDATE } from '../../actions';

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case HYDRATE:
			return action.payload.posts;
		case BOOK_UPDATE:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
