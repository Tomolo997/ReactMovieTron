import React from 'react';
import classes from './NextButton.module.css';
const NextButton = (props) => {
  return (
    <button
      className={classes.NextScrollButton}
      onClick={props.nextScrollMovie}
    >
      &#62;{' '}
    </button>
  );
};

export default NextButton;
