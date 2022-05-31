import { booksData } from './bookList.js';
import { displayBooks } from './functions.js';
import initialData from './data.js';

export const updateLocalStorage = () => {
  booksData.data = JSON.parse(localStorage.getItem('myLocalData' || '[]'));
  if (booksData.data === null) {
    booksData.data = initialData;
    localStorage.setItem('myLocalData', JSON.stringify(initialData));
    return;
  }

  booksData.data.forEach((book) => displayBooks(book));
};

