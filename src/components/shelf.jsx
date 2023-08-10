import React from "react";
import * as BooksAPI from "../assets/BooksAPI";

export default function Shelf({ books, shelf, setChanged }) {
  //
  // this is to know which title is used for the shelf
  let title;
  if (shelf === "currentlyReading") {
    title = "Currently Reading";
  } else if (shelf === "wantToRead") {
    title = "want To Read";
  } else {
    title = "Read";
  }

  // 
  // this function is to update changes that happens to books data and recalling setChange function to refetch data from the API in the mainPage and rerender the page with the new data
  function handleChangeShelf(book, shelf) {
    BooksAPI.update(book, shelf).then((res) => {
      setChanged(res);
    });
  }

  // 
  // here I am maping over the all books to give each book its card and information
  function BooksOnShelf() {
    return books.map((book) => {
      return (
        book.shelf === shelf && (
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
                      console.log(e.target.value);
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
                    <option value="nonde">REMOVE</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">
                {book.authors ? [...book.authors] : ""}
              </div>
            </div>
          </li>
        )
      );
    });
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <BooksOnShelf />
        </ol>
      </div>
    </div>
  );
}
