import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MainHeader from '../components/MainHeader';
import MainContent from '../components/MainContent';
import HighLight from '../components/HighLight';
import SecondaryHeader from '../components/SecondaryHeader';
import TopHeader from '../components/TopHeader';

function Home() {
  return (
    <div>
      <TopHeader />
      <div className="pb-20 ">
        <MainHeader />
        <SecondaryHeader />
        <HighLight />
      </div>
      <div className="container px-5 mx-auto ">
        {' '}
        <MainContent />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
