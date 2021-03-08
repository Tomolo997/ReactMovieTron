import React, { Component, Fragment } from 'react';
import classes from './TopMovies.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../../config';
import MovieCard from '../MovieCard/MovieCard';
import MoviesHeader from '../../../Components/Ui/MoviesHeader/MoviesHeader';
import NextButton from '../../../Components/Ui/NextButton/NextButton';
import PreviousButton from '../../../Components/Ui/PreviousButton/PreviousButton';
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
    //this only works if there are 20 results
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
          <Link to={`/${el.id}`} className={classes.LinkMovieCard} key={el.id}>
            <MovieCard
              showMovies={this.state.showMovies}
              id={el.id}
              poster_path={el.poster_path}
              title={el.title}
            ></MovieCard>
          </Link>
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
        <MoviesHeader />
        <div className={classes.Cards}>
          {PopularCards}
          <div>
            <PreviousButton
              prevScrollMovie={this.prevScrollMovie}
            ></PreviousButton>
            <NextButton nextScrollMovie={this.nextScrollMovie}></NextButton>
          </div>
        </div>
      </div>
    );
  }
}

export default TopMovies;
