import React from 'react';
import classes from './Navigation.module.css';
import Logo from './Logo/Logo';
import Search from '../../Containers/Search/Search';
import { Route, Switch, Link } from 'react-router-dom';
const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <Link style={{ gridColumn: '2/4' }} to="/">
        <Logo />
      </Link>

      <Search searching={props.searching} search={props.search} />
      <div className={classes.About}>
        <Link to="/About" className={classes.Link}>
          About
        </Link>
        <Link to="/Project" className={classes.Link}>
          Project
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
