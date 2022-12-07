import React from "react";
import * as BooksAPI from "../../assets/BooksAPI";
import { useState, useEffect } from "react";

export default function ShownSearchBooks({ searchTextInputValue }) {
  const [searchBooks, setSearchBooks] = useState([]);

  //
  // this useEffect is to get the data shown in the search page from the api
  useEffect(() => {
    BooksAPI.search(searchTextInputValue).then((res) => setSearchBooks(res));
  }, [searchTextInputValue]);

  function ShownBooksSearch() {
    return (
      Array.isArray(searchBooks) &&
      searchBooks.map((book) => {
        return (
          <li key={book.title}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: book.imageLinks
                      ? `url(${book.imageLinks.thumbnail})`
                      : "",
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select
                    onChange={(e) => {
                      handleChangeShelf(book, e.target.value);
                    }}
                    defaultValue={book.shelf}
                  >
                    <option value="none" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">
                {book.authors ? book.authors[0] : ""}
              </div>
            </div>
          </li>
        );
      })
    );
  }

  return (
  <ol className="books-grid">
    <ShownBooksSearch />
  </ol>
  )
}
