import React, { Component } from 'react';
import classes from './Search.module.css';
import axios from 'axios';
import { API_KEY } from '../../config';
class Search extends Component {
  state = {
    currentValue: null,
    movies: null,
    selected: 'movie',
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.movies == this.state.movies) {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/${this.state.selected}?api_key=${API_KEY}&query=${this.state.currentValue}&language=en-US&page=1&include_adult=false`
        );
        this.setState({ movies: res.data.results });
      } catch (error) {
        this.props.searching();
      }
    }
  }

  currentValueHandler = (e) => {
    this.setState({ currentValue: e.target.value });
    this.props.search(this.state.movies);
  };

  render() {
    return (
      <div className={classes.Search}>
        <input
          className={classes.InputSearch}
          type="text"
          placeholder="Enter Movie"
          onChange={this.currentValueHandler}
        />
        <select
          onChange={(e) => {
            this.setState({ selected: e.target.value });
          }}
          className={classes.SearchButton}
        >
          <option value="movie">Movies</option>
          <option value="tv">Tv Shows</option>
        </select>
      </div>
    );
  }
}

export default Search;
