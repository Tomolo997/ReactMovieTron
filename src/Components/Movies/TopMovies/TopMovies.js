import React, { Component, Fragment } from 'react';
import classes from './TopMovies.module.css';
import axios from 'axios';
import { API_KEY } from '../../../config';
export class TopMovies extends Component {
  state = {
    movies: null,
  };
  componentDidMount() {
    this.getPopularMovies();
  }

  getPopularMovies = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    this.setState({ movies: data.data });
  };
  render() {
    return (
      <div className={classes.TopMovies}>
        <div className={classes.TopMovies_Heading}>Top trending movies</div>
      </div>
    );
  }
}

export default TopMovies;
