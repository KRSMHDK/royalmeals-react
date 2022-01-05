import React, { useState, useEffect } from 'react';
import recipeService from '../services/recipes';
import { RecipeInterface } from '../interfaces/recipeInterface';

function MainContent() {
  const [recipes, setRecipes] = useState<RecipeInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await recipeService.getAll();
      setRecipes(data.reverse());
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div />;
  }

  return (
    <>
      <h1 className="mt-5 text-4xl font-bold font-nunito">Newest Recipes</h1>
      <div className="grid grid-cols-1 gap-2 pt-5 sm:grid-cols-2 font-nunito md:grid-cols-3 ">
        {recipes.map((recipe) => (
          <div key={recipe.recipeTitle} className="relative ">
            <img
              className="mx-auto transition border border-black cursor-pointer duration-250 hover:opacity-60 "
              src={`https://res.cloudinary.com/dtr2bqecp/image/upload/w_500,ar_3:2,c_fill,g_auto/v1633675614/${recipe.image}`}
              alt={recipe.recipeTitle}
            />
            <div className="py-2">
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
