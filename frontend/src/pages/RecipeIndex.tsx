import React from 'react';
import ArchiveNav from '../components/ArchiveNav';
import Content from '../components/Content';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import SecondaryHeader from '../components/SecondaryHeader';
import TopHeader from '../components/TopHeader';

const RecipeIndex = () => {
  const Context = {
    title: 'Recipe Index',
    description:
      'Browse our favorite easy chicken recipes by type, cuisine, cut of chicken, and more using the categories below! Or filter down further using the categories in the main menu above. We have something for everyone, so stay a while and get hungry!',
  };
  return (
    <div>
      <TopHeader />
      <div className="pb-20 ">
        <MainHeader />
        <SecondaryHeader />
        <ArchiveNav title={Context.title} description={Context.description} />
        <Content />
      </div>

      <Footer />
    </div>
  );
};

export default RecipeIndex;
