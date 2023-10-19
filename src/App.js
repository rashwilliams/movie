import React, { useState } from "react";
import movieList from "./Component/movieList";
import Filter from "./Component/Filter";
import MovieCard from "./Component/MovieCard";
import {Routes, Route} from "react-router-dom"
import Description from "./Component/Description"

const App = () => {

  return ( 
    <div className="app">
      <Filter />
      <Routes>
        <Route path="/movie/title" elemnent={<Description/>}/> 
        </Routes> 
      <MovieCard movieList={movieList} />
    </div>
  );
};

export default App;
