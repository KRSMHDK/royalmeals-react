import React from 'react';
import AddNewRecipe from '../components/AddNewRecipe';
import MainHeader from '../components/MainHeader';
function AddRecipe() {
  return (
    <div className="">
      <div className="bg-yellow-200 border-b-4 border-black ">
        <MainHeader />
      </div>

      <div className="px-5 pt-20 bg-slate-200">
        <AddNewRecipe />
      </div>
    </div>
  );
}

export default AddRecipe;
