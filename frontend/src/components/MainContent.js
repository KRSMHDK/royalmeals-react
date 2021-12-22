import React, { useState, useEffect, useContext } from 'react';

import { myContext } from '../pages/Context';
import recipeService from '../services/recipes';

function MainContent() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const ctx = useContext(myContext);

  console.log(ctx);
  useEffect(() => {
    const fetchData = async () => {
      const data = await recipeService.getAll();
      setRecipes(data.reverse());
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
        {recipes.map((recipe) => (
          <div className="relative ">
            <img
              className="mx-auto transition border border-black cursor-pointer duration-250 hover:opacity-60 "
              src={`https://res.cloudinary.com/dtr2bqecp/image/upload/w_500,ar_3:2,c_fill,g_auto/v1633675614/${recipe.image}`}
              alt={recipe.recipeTitle}
            />
            <div className="py-2 ">
              <p className="text-2xl font-bold">{recipe.recipeTitle}</p>
              <p className="mb-2 font-nunito">
                Difficulty: {recipe.difficulty}
              </p>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainContent;
