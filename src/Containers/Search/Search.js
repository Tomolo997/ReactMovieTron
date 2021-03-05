import React from 'react';
import classes from './Search.module.css';
const Search = () => {
  return (
    <div className={classes.Search}>
      <input
        className={classes.InputSearch}
        type="text"
        placeholder="Enter Movie"
      />
      <button className={classes.SearchButton}>Search</button>
    </div>
  );
};

export default Search;
