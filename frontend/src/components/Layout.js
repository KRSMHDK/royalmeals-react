import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import MainHeader from './MainHeader';

function Layout({ children }) {
  return (
    <div className="bg-green-200">
      <MainHeader />
      <Hero />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
