import classes from './MovieDetail.module.css';
import React, { Component } from 'react';
import NavBar from '../../Components/Navigation/Navigation';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../config';
import Footer from '../../Components/Footer/Footer';
export default class MovieDetails extends Component {
  state = {
    id: '',
    title: '',
    cast: null,
    description: null,
    budget: null,
    homepage: null,
    dateOfRelease: null,
    genreOfMovie: null,
    similar: null,
    posterPath: null,
    runtime: null,
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

  async componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  async componentDidMount() {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US`
    );
    this.setState({
      id: data.data.id,
      title: data.data.original_title,
      description: data.data.overview,
      budget: data.data.budget,
      homepage: data.data.homepage,
      dateOfRelease: data.data.release_date,
      genreOfMovie: data.data.genres,
      posterPath: data.data.poster_path,
      runtime: data.data.runtime,
    });
    console.log(data.data);
    const dataCast = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.id}/credits?api_key=${API_KEY}&language=en-US`
    );
    this.setState({ cast: dataCast.data.cast.slice(0, 20) });
  }
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  render() {
    let genres = null;
    if (this.state.genreOfMovie !== null) {
      genres = this.state.genreOfMovie.map((el) => {
        return <p1>{el.name}, </p1>;
      });
    }

    let cast = null;
    if (this.state.cast !== null) {
      cast = this.state.cast.map((el) => {
        if (el.profile_path) {
          return (
            <div className={classes.CastCard}>
              <img
                className={classes.CardImg}
                src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                alt=""
              />
              <div className={classes.Name}>{el.name}</div>
            </div>
          );
        }
      });
    }
    let movies = null;
    if (this.state.movies !== null) {
      movies = this.state.movies.map((el) => {
        if (el.poster_path) {
          return (
            <Link
              key={el.id}
              to={`/${el.id}`}
              onClick={() => this.setState({ searching: false })}
            >
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
    let movie = (
      <div className={classes.Container}>
        <div className={classes.MovieImage}>
          <img
            className={classes.Image}
            src={`https://image.tmdb.org/t/p/w400${this.state.posterPath}`}
            alt=""
          />
        </div>
        <div className={classes.Title}>
          <h1 className={classes.H1Heading}>{this.state.title}</h1>
        </div>
        <div className={classes.DescriptionDiv}>
          <p className={classes.DescriptionParagraph}>
            {this.state.description}
          </p>
        </div>
        <div className={classes.TimeStamp}>
          <p className={classes.TimeStampParagraph}>
            <span className={classes.DescriptionSpan}>Runtime: </span>{' '}
            {this.state.runtime} minutes
          </p>
          <p className={classes.TimeStampParagraph}>
            <span className={classes.DescriptionSpan}>Budget: </span>{' '}
            {this.numberWithCommas(+this.state.budget)} $
          </p>
          <p className={classes.TimeStampParagraph}>
            <span className={classes.DescriptionSpan}>Genre: </span>
            {genres}
          </p>
          <p className={classes.TimeStampParagraph}>
            <span className={classes.DescriptionSpan}> Release date: </span>
            {this.state.dateOfRelease}
          </p>
          <p className={classes.TimeStampParagraph}>
            <span className={classes.DescriptionSpan}>
              {' '}
              <a className={classes.homepageLink} href={this.state.homepage}>
                Homepage
              </a>{' '}
            </span>
          </p>
        </div>
        <div className={classes.CastTitle}>
          <h1 className={classes.H1HeadingCast}>Cast:</h1>
        </div>
        <div className={classes.Cast}>{cast}</div>
      </div>
    );
    return (
      <>
        <NavBar searching={this.setSearchingToFalse} search={this.search} />{' '}
        {!this.state.searching ? (
          movie
        ) : (
          <div className={classes.MovieSearch}>{movies}</div>
        )}
        <Footer />
      </>
    );
  }
}
