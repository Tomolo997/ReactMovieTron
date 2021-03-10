import React from 'react';
import Navbar from '../../Components/Navigation/Navigation';
import '../../../src/App.css';
import classes from './Project.module.css';
import Footer from '../Footer/Footer';
const AboutPage = () => {
  return (
    <div className="App">
      <Navbar />
      <div className={classes.AboutSection}>
        <div className={classes.AboutParagraph}>
          <h1 className={classes.AboutHeading}>
            <span className={classes.SpanMovie}>Movie</span>
            <span className={classes.SpanTron}>Tron</span>
          </h1>
          <p className={classes.Paragraph}>
            App build with the react tools, the project github can be found on
            the next link{' '}
            <a href="https://github.com/Tomolo997/ReactMovieTron">GitHub</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
