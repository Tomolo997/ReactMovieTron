import React, { Component } from 'react';
import Navbar from '../../Components/Navigation/Navigation';
import TopMovies from '../../Containers/Movies/TopMovies/TopMovies';
import TopTvShows from '../../Containers/Movies/TopTvShows/TopTvShows';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { API_KEY } from '../../config';

class Home extends Component {
  state = {
    searching: false,
    movies: null,
  };

  search = (movies) => {
    this.setState({ searching: true });
    this.setState({ movies: movies });
  };

  setSearchingToFalse = () => {
    if (this.state.searching === true) {
      this.setState({ searching: false });
    } else return;
  };

  render() {
    let movies = null;
    if (this.state.movies !== null) {
      movies = this.state.movies.map((el) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img
              src={`https://image.tmdb.org/t/p/w400${el.poster_path}`}
              key={el.id}
              style={{ color: 'white' }}
            />
            {el.name}
          </div>
        );
      });
    }
    return (
      <div>
        <Navbar searching={this.setSearchingToFalse} search={this.search} />
        {!this.state.searching ? <TopMovies /> : movies}
        {!this.state.searching ? <TopTvShows /> : movies}

        <Footer />
      </div>
    );
  }
}

export default Home;
