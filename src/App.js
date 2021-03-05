import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Navbar from './Components/Navigation/Navigation';
import TopMovies from './Components/Movies/TopMovies/TopMovies';
import TopTvShows from './Components/Movies/TopTvShows/TopTvShows';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <TopMovies />
      <TopTvShows />
    </div>
  );
}

export default App;
