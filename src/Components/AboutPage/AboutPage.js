import React from 'react';
import Navbar from '../../Components/Navigation/Navigation';
import '../../../src/App.css';
import classes from './AboutPage.module.css';
import AboutSection from '../AboutSection/AboutSection';
const AboutPage = () => {
  return (
    <div className="App">
      <Navbar />
      <AboutSection></AboutSection>
    </div>
  );
};

export default AboutPage;
