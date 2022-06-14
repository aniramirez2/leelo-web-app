import { HYDRATE } from 'next-redux-wrapper';
import { USER_UPDATE } from '../../actions';

const initialState = {
	id: null,
	firstName: null,
	lastName: null,
	email: null,
	birthdate: null,
	phone: null,
	address: {
		street: null,
		city: null,
		country: null,
	},
	enabled: true,
	createdDate: null,
	lastUpdate: null,
	password: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload.user };
		case USER_UPDATE:
			const newState = { ...state, ...action.payload };
			newState.fullName = `${newState.firstName} ${newState.lastName}`;
			return newState;
		default:
			return state;
	}
};

export default reducer;
