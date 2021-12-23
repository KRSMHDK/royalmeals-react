import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MainHeader from '../components/MainHeader';

function Home() {
  return (
    <>
      <div className="pb-20 bg-blue-200">
        <MainHeader />
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default Home;
