import React, { useState } from 'react';
import recipeService from '../services/recipes';

function NewRecipe() {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [image, setImage] = useState('');

  const addRecipe = (event) => {
    event.preventDefault();
    console.log(image);
    const formData = new FormData();

    const ingredientsArray = ingredients.split('\n');
    formData.append('recipeTitle', recipeTitle);
    formData.append('description', description);
    formData.append('ingredients', ingredientsArray);
    formData.append('difficulty', difficulty);
    formData.append('instructions', instructions);
    formData.append('image', image);

    recipeService.create(formData);

    setRecipeTitle('');
    setDescription('');
    setInstructions('');
    setImage('');
  };

  return (
    <div className="container lg:pl-52 mx-auto ">
      <form
        onSubmit={addRecipe}
        className="flex flex-col gap-4"
        encType="multipart/form-data"
      >
        <h1 className="text-2xl font-bold">ADD A RECIPE</h1>
        <div>
          <input
            onChange={(event) => setRecipeTitle(event.target.value)}
            value={recipeTitle}
            className="px-2 py-2 border border-black"
            type="text"
            placeholder="Recipe title"
          />
        </div>

        <div className="">
          <textarea
            rows="5"
            cols="60"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            className="px-2  py-2 max-w-md  border border-black"
            placeholder="Recipe Description"
          />
        </div>
        <h1 className="text-2xl font-bold ">INGREDIENTS</h1>
        <h2>
          Enter your ingredients one at a time or paste them into the box below
          and hit enter.
        </h2>
        <div>
          <textarea
            rows="5"
            cols="60"
            onChange={(event) => setIngredients(event.target.value)}
            value={ingredients}
            placeholder="Ex: 1 cup of sugar"
            className="px-2 py-2 border border-black "
          />
        </div>
        <h1 className="text-2xl font-bold ">DESCRIPTION</h1>
        <h2>
          Enter your directions one step at a time or paste them into the box
          below and hit enter. Don’t worry, we will number them for you.
        </h2>
        <div>
          <textarea
            rows="5"
            cols="60"
            onChange={(event) => setInstructions(event.target.value)}
            value={instructions}
            placeholder="Ex: place all ingredients in blender"
            className="px-2 py-2 border border-black"
          />
        </div>
        <div>
          <label className="font-bold">Difficulty</label>
          <br />
          <input
            type="radio"
            name="difficulty"
            onChange={(event) => setDifficulty(event.target.value)}
            value="Easy"
          />
          <label>Easy</label>
          <input
            type="radio"
            name="difficulty"
            onChange={(event) => setDifficulty(event.target.value)}
            value="Medium"
          />
          <label>Medium</label>
          <input
            type="radio"
            name="difficulty"
            onChange={(event) => setDifficulty(event.target.value)}
            value="Hard"
          />
          <label>Hard</label>
        </div>
        <div>
          <label>Image</label>
          <input
            onChange={(event) => setImage(event.target.files[0])}
            type="file"
          />
        </div>

        <input
          className="border-2 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default NewRecipe;
