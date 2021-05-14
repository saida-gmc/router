import React, { useState } from "react";
import "./App.css";
import MoviesList from "./Components/MoviesList";
import AddCard from "./Components/AddCard";
import Data from "./Components/Data";
import Search from "./Components/Search";
import { Navbar, Nav } from "react-bootstrap";
import { Route } from "react-router-dom";

import Rate from "./Components/Rate";
import Trailer from "./Components/Trailer";

const App = () => {
  const [moviesInfo, setMoviesInfo] = useState(Data);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const handleAdd = (newMovie) => {
    setMoviesInfo([...moviesInfo, newMovie]);
  };

  return (
    <div className="App">
      <h1>Movie Application</h1>
      <Route exact path="/">
        <Navbar>
          <Nav>
            <AddCard handleAdd={handleAdd} />
            <Search setSearch={setSearch} />
            <Rate rating={rating} setRating={setRating} />
          </Nav>
        </Navbar>
        <MoviesList moviesInfo={moviesInfo} search={search} rating={rating} />
      </Route>
      <Route path="/:ID">
        <Trailer moviesInfo={moviesInfo} />
      </Route>
    </div>
  );
};
export default App;
