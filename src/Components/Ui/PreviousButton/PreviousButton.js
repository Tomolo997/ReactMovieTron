import React from 'react';
import classes from './PreviousButton.module.css';
const PreviousButton = (props) => {
  return (
    <button
      className={classes.PreviusScrollButton}
      onClick={props.prevScrollMovie}
    >
      &#60;
    </button>
  );
};

export default PreviousButton;
