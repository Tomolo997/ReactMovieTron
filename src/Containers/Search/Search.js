import React, { Component } from 'react';
import classes from './Search.module.css';
import axios from 'axios';
import { API_KEY } from '../../config';
class Search extends Component {
  state = {
    currentValue: 'aa',
  };

  componentDidUpdate() {
    console.log(this.state.currentValue);
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${this.state.currentValue}&language=en-US&page=1&include_adult=false`
      )
      .then((res) => console.log(res));
  }

  currentValueHandler = (e) => {
    this.setState({ currentValue: e.target.value });
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
        <button className={classes.SearchButton}>Search</button>
      </div>
    );
  }
}

export default Search;
