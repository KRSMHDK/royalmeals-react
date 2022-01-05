import React from 'react';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
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

      <Footer />
    </div>
  );
}

export default Home;
