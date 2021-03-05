import React from 'react';
import Navbar from '../../Components/Navigation/Navigation';
import TopMovies from '../Movies/TopMovies/TopMovies';
import TopTvShows from '../Movies/TopTvShows/TopTvShows';
const Home = () => {
  return (
    <div>
      <Navbar />
      <TopMovies />
      <TopTvShows />
    </div>
  );
};

export default Home;
