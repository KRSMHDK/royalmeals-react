import React from 'react';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import SecondaryHeader from '../components/SecondaryHeader';
import TopHeader from '../components/TopHeader';

function RecipeIndex() {
  return (
    <div>
      <TopHeader />
      <div className="pb-20 ">
        <MainHeader />
        <SecondaryHeader />
      </div>

      <Footer />
    </div>
  );
}

export default RecipeIndex;
