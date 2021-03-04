import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Navbar from './Components/Navigation/Navigation';
import TopMovies from './Components/Movies/TopMovies/TopMovies';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <TopMovies />
    </div>
  );
}

export default App;
