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
    <div className="container mx-auto">
      <form
        onSubmit={addRecipe}
        className="flex flex-col gap-4"
        encType="multipart/form-data"
      >
        <div>
          <label>Recipe Title</label>
          <input
            onChange={(event) => setRecipeTitle(event.target.value)}
            value={recipeTitle}
            className="border shadow"
            type="text"
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            rows="5"
            cols="60"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            className="border shadow"
          />
        </div>

        <div>
          <label>Ingredients</label>
          <textarea
            rows="5"
            cols="60"
            onChange={(event) => setIngredients(event.target.value)}
            value={ingredients}
            className="border shadow"
          />
        </div>
        <div>
          <label>Instructions</label>
          <textarea
            rows="5"
            cols="60"
            onChange={(event) => setInstructions(event.target.value)}
            value={instructions}
            className="border shadow"
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
