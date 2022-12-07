import React from "react";
import ShownSearchBooks from "./shownSearchBooks";
import { Link } from "react-router-dom";

export default function SearchPage() {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ShownSearchBooks />
      </div>
    </div>
  );
}
