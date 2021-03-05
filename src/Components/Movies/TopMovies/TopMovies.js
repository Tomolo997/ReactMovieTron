import React, { Component, Fragment } from 'react';
import classes from './TopMovies.module.css';
import axios from 'axios';
import { API_KEY } from '../../../config';
export class TopMovies extends Component {
  state = {
    movies: null,
    showMovies: false,
    start: 0,
    end: 7,
    pages: 0,
  };
  async componentDidMount() {
    const data = await this.getPopularMovies();

    this.setState({ movies: data });
    this.setState({ showMovies: true });
    this.setState({ pages: Math.ceil(data.length / 7) });
  }

  getPopularMovies = async () => {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      console.log(data.data);
      return data.data.results;
    } catch (error) {
      console.log(error);
    }
  };

  nextScrollMovie = () => {
    this.setState({ start: this.state.start + 7, end: this.state.end + 7 });
    if (this.state.start > 12) {
      this.setState({ start: 0, end: 7 });
    }
  };
  prevScrollMovie = () => {
    this.setState({ start: this.state.start - 7, end: this.state.end - 7 });
    if (this.state.start < 2) {
      this.setState({ start: 14, end: 21 });
    }
  };

  scrollThroughMovies = () => {
    return this.state.movies
      .slice(this.state.start, this.state.end)
      .map((el) => {
        return (
          <div className={classes.Card}>
            <div className={classes.CardImage}>
              {this.state.showMovies ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                  alt=""
                />
              ) : null}
              <div>{el.title}</div>
            </div>
          </div>
        );
      });
  };

  render() {
    let PopularCards = null;
    if (this.state.showMovies) {
      PopularCards = this.scrollThroughMovies();
    }
    return (
      <div className={classes.TopMovies}>
        <div className={classes.TopMovies_Heading}>Top trending movies</div>
        <div className={classes.Cards}>
          {PopularCards}
          <div>
            <button
              className={classes.PreviusScrollButton}
              onClick={this.prevScrollMovie}
            >
              &#60;
            </button>
            <button
              className={classes.NextScrollButton}
              onClick={this.nextScrollMovie}
            >
              &#62;{' '}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TopMovies;
