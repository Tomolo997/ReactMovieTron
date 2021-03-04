import React from 'react';
import classes from './Navigation.module.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';
const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <Logo />
      <Search />
      <div className={classes.About}>
        <a href="/" className={classes.Link}>
          About
        </a>
        <a href="/" className={classes.Link}>
          Project
        </a>
      </div>
    </div>
  );
};

export default Navigation;
