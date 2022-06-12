import { BOOK_UPDATE } from '../';

export const bookUpdate = (book) => ({
	type: BOOK_UPDATE,
	payload: book,
});
