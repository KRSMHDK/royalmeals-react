import React from 'react';
import Footer from './Footer';
import MainHeader from './MainHeader';
import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <div>
      <MainHeader />
      <NavBar />

      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
