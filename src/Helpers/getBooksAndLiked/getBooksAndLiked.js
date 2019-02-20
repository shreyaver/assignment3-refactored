import Axios from 'axios';
import { ALL_BOOKS_URL, STORE_BOOKS_URL, GET_LIKED_BY_ID_URL } from '../../config';
import getRequest from '../getRequest/getRequest';

const getBooksAndLiked = async () => {
  try {
    const books = await getRequest(ALL_BOOKS_URL);
    const booksWithoutLiked = { books };
    await getRequest(STORE_BOOKS_URL);
    const booksWithLiked = { books: {} };
    const likedObjArr = await Promise.all(Object.keys(booksWithoutLiked.books).map(author => Axios.all(booksWithoutLiked.books[author].map(book => getRequest(`${GET_LIKED_BY_ID_URL}/${book.id}`)))));
    Object.keys(booksWithoutLiked.books).forEach((author, authorIndex) => {
      booksWithLiked.books[author] = booksWithoutLiked.books[author].map((book, bookIndex) => ({ ...book, liked: likedObjArr[authorIndex][bookIndex] }));
    });
    return booksWithLiked;
  } catch (errorObj) {
    return errorObj.message;
  }
};
export default getBooksAndLiked;
