import React, { Component } from 'react';
import Navbar from '../../Components/Navigation/Navigation';
import TopMovies from '../../Containers/Movies/TopMovies/TopMovies';
import TopTvShows from '../../Containers/Movies/TopTvShows/TopTvShows';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { API_KEY } from '../../config';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    searching: false,
    movies: null,
    selected: 'movie',
  };

  search = (movies) => {
    this.setState({ searching: true });
    this.setState({ movies: movies });
  };

  changeTheSelected = (e) => {
    console.log(e.target.value);
    this.setState({ selected: e.target.value });
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
        if (el.poster_path) {
          return (
            <Link key={el.id} to={`/${this.state.selected}/${el.id}`}>
              <div
                key={el.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                }}
              >
                <img
                  style={{ width: '200px', height: '300px' }}
                  src={`https://image.tmdb.org/t/p/w400${el.poster_path}`}
                  key={el.id}
                />
                <div className={classes.ElName}>{el.name}</div>
              </div>
            </Link>
          );
        } else {
          return;
        }
      });
    }
    return (
      <div>
        <Navbar
          selected={this.state.selected}
          changeSelected={this.changeTheSelected}
          searching={this.setSearchingToFalse}
          search={this.search}
        />
        {!this.state.searching ? (
          <TopMovies />
        ) : (
          <div className={classes.MovieSearch}>{movies}</div>
        )}
        {!this.state.searching ? <TopTvShows /> : null}

        <Footer />
      </div>
    );
  }
}

export default Home;
