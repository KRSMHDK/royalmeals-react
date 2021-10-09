import React, { useState, useEffect } from 'react';
import Featured from './Featured';
import PopularRecipes from './PopularRecipes';
import CookBook from './CookBook';
import recipeService from '../services/recipes';

function MainContent() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await recipeService.getAll();
      setRecipes(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(recipes[0]);

  if (loading) {
    return <div></div>;
  }

  return (
    <>
      <h1 className="mt-5 text-4xl font-bold font-nunito">Newest Recipes</h1>
      <div className="grid grid-cols-1 gap-2 pt-5 sm:grid-cols-2 font-nunito md:grid-cols-3 ">
        <div className="relative ">
          <img
            className="border-2 border-black "
            src={`https://res.cloudinary.com/dtr2bqecp/image/upload/w_550,h_450,c_fill/v1633675614/${recipes[0].image}`}
            alt={recipes[0].recipeTitle}
          />
          <div className="px-2 py-2">
            <p className="text-2xl font-bold">{recipes[0].recipeTitle}</p>
            <br />
            <p>{recipes[0].description}</p>
          </div>
        </div>
        <div className="relative ">
          <img
            className="border-2 border-black"
            src={`https://res.cloudinary.com/dtr2bqecp/image/upload/v1633675614/${recipes[1].image}`}
            alt={recipes[1].recipeTitle}
          />
          <div className="px-2 py-2">
            <p className="text-2xl font-bold">{recipes[1].recipeTitle}</p>
            <br />
            <p>{recipes[1].description}</p>
          </div>
        </div>
        <div className="relative ">
          <img
            className="border-2 border-black"
            src={`https://res.cloudinary.com/dtr2bqecp/image/upload/v1633675614/${recipes[2].image}`}
            alt={recipes[2].recipeTitle}
          />
          <div className="px-2 py-2">
            <p className="text-2xl font-bold">{recipes[2].recipeTitle}</p>
            <br />
            <p>{recipes[2].description}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 pt-5 sm:grid-cols-2 md:grid-cols-3 ">
        <div className="">
          <Featured />
        </div>
        <div className="">
          <PopularRecipes />
        </div>
        <div className="">
          <CookBook />
        </div>
      </div>
    </>
  );
}

export default MainContent;
