import React from 'react';
import Navbar from '../../Components/Navigation/Navigation';
import TopMovies from '../Movies/TopMovies/TopMovies';
import TopTvShows from '../Movies/TopTvShows/TopTvShows';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <TopMovies />
      <TopTvShows />
      <Footer />
    </div>
  );
};

export default Home;
