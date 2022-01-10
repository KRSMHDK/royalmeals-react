/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  recipeTitle: string;
  description: string;
  ingredients: string;
  instructions: string;
  difficulty: string;
  method: string;
  cut: string;
  course: string;
  cuisine: string;
  flavor: string;
  author: number;
};

const NewRecipe = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <div className="bg-slate-900">
        <div className="container max-w-screen-lg p-4 mx-auto">
          <h1 className="text-4xl font-bold text-center text-yellow-500">
            Submit A Recipe
          </h1>
        </div>
      </div>
      <div className="container px-4 mx-auto lg:max-w-screen-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="recipeTitle"
            className="text-2xl font-bold whitespace-pre-wrap"
          >
            Recipe Title
            <input
              className="block border-2"
              placeholder="test"
              {...register('recipeTitle')}
            />
          </label>
          <label
            htmlFor="description"
            className="text-2xl font-bold whitespace-pre-wrap"
          >
            Description
            <textarea
              className="block border-2"
              placeholder="test"
              {...register('description')}
            />
          </label>
          <label
            htmlFor="instructions"
            className="text-2xl font-bold whitespace-pre-wrap"
          >
            Instructions
            <textarea
              className="block border-2"
              placeholder="test"
              {...register('instructions')}
            />
          </label>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
