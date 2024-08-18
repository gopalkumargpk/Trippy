import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Contact from './Content';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default MainLayout;
