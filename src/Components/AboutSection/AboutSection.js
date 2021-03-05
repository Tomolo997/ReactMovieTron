import classes from './AboutSection.module.css';
import React from 'react';

const AboutSection = () => {
  return (
    <div className={classes.AboutSection}>
      <h1>
        <span className={classes.SpanMovie}>Movie</span>
        <span className={classes.SpanTron}>Tron</span>
      </h1>
    </div>
  );
};

export default AboutSection;
