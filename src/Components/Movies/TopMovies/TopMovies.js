import React, { Component, Fragment } from 'react';
import classes from './TopMovies.module.css';
import axios from 'axios';
import { API_KEY } from '../../../config';
export class TopMovies extends Component {
  state = {
    movies: null,
    showMovies: false,
  };
  async componentDidMount() {
    const data = await this.getPopularMovies();

    this.setState({ movies: data });
    this.setState({ showMovies: true });
  }

  getPopularMovies = async () => {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      return data.data.results;
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className={classes.TopMovies}>
        <div className={classes.TopMovies_Heading}>Top trending movies</div>
        <div className={classes.Cards}>
          <div className={classes.Card}>
            <div className={classes.CardImage}>
              {this.state.showMovies ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${this.state.movies[2].poster_path}`}
                  alt=""
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopMovies;
