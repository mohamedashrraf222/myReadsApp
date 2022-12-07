import React from "react";
import ShownSearchBooks from "./shownSearchBooks";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../../assets/BooksAPI"

export default function SearchPage() {
  // 
  // this state is to make the input controlled
  const [searchTextInputValue, setSearchTextInputValue] = useState("");

  

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchTextInputValue}
            onChange={(e) => {
              setSearchTextInputValue(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ShownSearchBooks searchTextInputValue={searchTextInputValue}/>
      </div>
    </div>
  );
}
