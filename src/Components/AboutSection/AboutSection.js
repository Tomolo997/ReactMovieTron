import classes from './AboutSection.module.css';
import React from 'react';

const AboutSection = () => {
  return (
    <div className={classes.AboutSection}>
      <div className={classes.AboutParagraph}>
        <h1 className={classes.AboutHeading}>
          <span className={classes.SpanMovie}>Movie</span>
          <span className={classes.SpanTron}>Tron</span>
        </h1>
        <p className={classes.Paragraph}>
          This is an app made by Tomaž Ovsenjak. It shows the weekly most
          popular movies and tv Shows. You can search for different movies and
          see their stats from rating on DB to cast.
        </p>
        <p className={classes.Paragraph}>
          This Project is made with JavaScript library/framework React.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
