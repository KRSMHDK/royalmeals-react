import React from 'react';
import AddNewRecipe from '../components/AddNewRecipe';
import MainHeader from '../components/MainHeader';
import TopHeader from '../components/TopHeader';

function AddRecipe() {
  return (
    <div className="">
      <TopHeader />
      <MainHeader />

      <AddNewRecipe />
    </div>
  );
}

export default AddRecipe;
