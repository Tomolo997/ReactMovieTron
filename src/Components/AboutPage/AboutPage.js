import React from 'react';
import Navbar from '../../Components/Navigation/Navigation';
import '../../../src/App.css';
import classes from './AboutPage.module.css';
import AboutSection from '../AboutSection/AboutSection';
import Footer from '../Footer/Footer';
const AboutPage = () => {
  return (
    <div className="App">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
