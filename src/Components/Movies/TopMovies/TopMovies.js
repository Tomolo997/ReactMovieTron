import React, { Component, Fragment } from 'react';
import classes from './TopMovies.module.css';
export class TopMovies extends Component {
  render() {
    return (
      <div className={classes.TopMovies}>
        <div className={classes.TopMovies_Heading}>Top trending movies</div>
      </div>
    );
  }
}

export default TopMovies;
