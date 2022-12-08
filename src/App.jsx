import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import MainPage from "./components/mainPage";
import SearchPage from "./components/searchPage/searchPage";
import { Router, Routes, Route } from "react-router-dom";
import * as BooksAPI from "./assets/BooksAPI";
// import fakeBook from "./assets/fakeBook";

function App() {

  const [allBooks , setAllBooks] = useState([])
  //
  // here I am making a state to make  the shelf status between Main and Search page is consistent.
  // const [consistent, setConsistent] = useState({});

  //
  // this is to get some info of books 
  // BooksAPI.update(fakeBook[0], "none").then((res) => setConsistent(res));

  return (
    <Routes className="app">
      <Route path="/search" element={<SearchPage allBooks={allBooks} setAllBooks={setAllBooks} />} />
      <Route exact path="/" element={<MainPage setAllBooks={setAllBooks}/>} />
    </Routes>
  );
}

export default App;
