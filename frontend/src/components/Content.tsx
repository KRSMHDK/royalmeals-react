import React, { useState, useEffect } from 'react';
import recipeService from '../services/recipes';
import { RecipeInterface } from '../interfaces/recipeInterface';

function Content() {
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
    <div className="container max-w-screen-lg px-6 py-6 mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline w-10 text-pink-500 h-9"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <h1 className="inline text-3xl font-bold align-middle ">
        Newest Recipes
      </h1>
      <p className="pt-5">
        These Easy Chicken Recipes are some of the most popular on our site!
        They&apos;re tried-and-true and ready to make for dinner tonight.
      </p>
      <div className="grid grid-cols-2 pt-5 gap-y-7 gap-x-2 md:grid-cols-4 ">
        {recipes.map((recipe) => (
          <div
            key={recipe.recipeTitle}
            className="border border-black shadow-md"
          >
            <img
              className="object-cover object-center transition duration-500 border cursor-pointer hover:opacity-60"
              src={`https://res.cloudinary.com/dtr2bqecp/image/upload/c_fill,h_486,w_305/v1633675614/${recipe.image}`}
              alt={recipe.recipeTitle}
            />
            <div className="py-3 text-center">
              <p className="font-semibold md:text-md">{recipe.recipeTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
