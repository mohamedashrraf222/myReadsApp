import React from "react";
import Shelf from "./shelf";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksApI from "../assets/BooksAPI";

export default function MainPage() {
  //
  // at the fist I am defining some states

  //
  // this state is for the books array which is shown on the main page
  const [mainPageBooks, setMainPageBooks] = useState([]);

  //
  // this state is responsible for using useEffect when the shelf data in the main page is updated
  const [changed, setChanged] = useState({});

  //
  // this is to get data shown on the main page from the API
  useEffect(() => {
    BooksApI.getAll().then((res) => setMainPageBooks(res));
  }, [changed]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {/* here I am using one component to show the three shelfs and each shelf takes some props */}
        <div>
          <Shelf
            books={mainPageBooks}
            shelf="currentlyReading"
            setChanged={setChanged}
          />
          <Shelf
            books={mainPageBooks}
            shelf="wantToRead"
            setChanged={setChanged}
          />
          <Shelf books={mainPageBooks} shelf="read" setChanged={setChanged} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
