import React from "react";
import * as BooksAPI from "../../assets/BooksAPI";
import { useState, useEffect } from "react";

export default function ShownSearchBooks({ searchTextInputValue }) {
  const [searchBooks, setSearchBooks] = useState([]);

  //
  // this useEffect is to get the data shown in the search page from the api
  useEffect(() => {
    searchTextInputValue !== "" &&
      BooksAPI.search(searchTextInputValue).then((res) => setSearchBooks(res));
  }, [searchTextInputValue]);

  //
  // this function is used to update data
  function handleChangeShelf(book, shelf) {
    BooksAPI.update(book, shelf).then((res) => {
      console.log(res);
    });

    // for (let i = 0; i < searchBooks.length; i++) {
    //   searchBooks[i].title === book.title ? removeBook(i) : "don't remove";
    // }
  }

  //
  // this function is used to remove the book from search after adding it to our library
  //   function removeBook(i){
  //     setSearchBooks(prev => {
  //         prev.splice(i , 1)
  //         console.log(prev);
  //         return (prev)
  //     })
  //   }

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
                    defaultValue="none"
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
  );
}
