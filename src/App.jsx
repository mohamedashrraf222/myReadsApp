import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import MainPage from "./components/mainPage";
import SearchPage from "./components/searchPage/searchPage";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes className="app">
      <Route path="/search" element={<SearchPage />} />
      <Route exact path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
