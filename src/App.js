import React, { useState } from 'react';
import MovieList from "./Component/MovieList.js";
import Filter from "./Component/Filter.js";
import MovieCard from "./Component/MovieCard.js";

const App = () => {
  return (
  <div className="app">
  <Filter/>
  <MovieList/>
  <MovieCard/>
</div>
  )

}

export default App;



