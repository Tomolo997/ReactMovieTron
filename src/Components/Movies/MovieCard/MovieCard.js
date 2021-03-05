import React from 'react';
import classes from './MovieCard.module.css';
const MovieCard = (props) => {
  return (
    <div key={props.id} className={classes.Card}>
      <div className={classes.CardImage}>
        {props.showMovies ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${props.poster_path}`}
            alt=""
          />
        ) : null}
        <div>{props.title}</div>
      </div>
    </div>
  );
};

export default MovieCard;
