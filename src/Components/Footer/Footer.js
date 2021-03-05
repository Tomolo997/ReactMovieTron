import classes from './Footer.module.css';
import React from 'react';
import MovieDbLogo from '../../Images/MovieDb_logo.png';
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div>
        {' '}
        <img
          src={MovieDbLogo}
          className={classes.MovieDbLogo}
          alt="MovieDB"
        />{' '}
      </div>
      <div className={classes.CopyRigth}> Copyright by @Tomaž Ovsenjak</div>
    </div>
  );
};

export default Footer;
