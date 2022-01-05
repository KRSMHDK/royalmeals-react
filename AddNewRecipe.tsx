import React, { useContext, useState } from 'react';
import recipeService from '../services/recipes';
import { myContext } from '../context/Context';

function NewRecipe() {
  const ctx = useContext(myContext);

  const [recipeTitle, setRecipeTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [image, setImage] = useState('');
  const [method, setMethod] = useState('a');
  const [cut, setCut] = useState('b');
  const [course, setCourse] = useState('b');
  const [cuisine, setCuisine] = useState('c');
  const [flavor, setFlavor] = useState('d');
  const [author] = useState(ctx.id || '');

  const addRecipe = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    const formData = new FormData();

    const ingredientsArray = ingredients.split('\n');
    formData.append('recipeTitle', recipeTitle);
    formData.append('description', description);
    formData.append('ingredients', JSON.stringify(ingredientsArray));
    formData.append('difficulty', difficulty);
    formData.append('instructions', instructions);

    formData.append('cut', cut);
    formData.append('method', method);
    formData.append('course', course);
    formData.append('cuisine', cuisine);
    formData.append('flavor', flavor);
    formData.append('image', image);

    formData.append('author', author);
    recipeService.create(formData);

    setRecipeTitle('');
    setDescription('');
    setInstructions('');
    setImage('');
  };

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
        <form
          onSubmit={addRecipe}
          className="flex flex-col gap-4 py-4"
          encType="multipart/form-data"
        >
          <div>
            <h1 className="text-2xl font-bold ">RECIPE TITLE</h1>
            <input
              onChange={(event) => setRecipeTitle(event.target.value)}
              value={recipeTitle}
              className="px-2 py-2 border border-black"
              type="text"
              placeholder="Recipe title"
            />
          </div>

          <div className="">
            <h1 className="text-2xl font-bold ">RECIPE DESCRIPTION</h1>
            <textarea
              rows={5}
              cols={60}
              onChange={(event) => setDescription(event.target.value)}
              value={description}
              className="max-w-sm px-2 py-2 border border-black md:max-w-md lg:max-w-lg"
              placeholder="Recipe Description"
            />
          </div>
          <h1 className="text-2xl font-bold ">INGREDIENTS</h1>
          <h2>
            Enter your ingredients one at a time or paste them into the box
            below and hit enter.
          </h2>
          <div>
            <textarea
              rows={5}
              cols={60}
              onChange={(event) => setIngredients(event.target.value)}
              value={ingredients}
              placeholder="Ex: 1 cup of sugar"
              className="max-w-sm px-2 py-2 border border-black md:max-w-md lg:max-w-lg "
            />
          </div>
          <h1 className="text-2xl font-bold ">DESCRIPTION</h1>
          <h2>
            Enter your directions one step at a time or paste them into the box
            below and hit enter. Don’t worry, we will number them for you.
          </h2>
          <div>
            <textarea
              rows={5}
              cols={60}
              onChange={(event) => setInstructions(event.target.value)}
              value={instructions}
              placeholder="Ex: place all ingredients in blender"
              className="max-w-sm px-2 py-2 border border-black md:max-w-md lg:max-w-lg"
            />
          </div>
          <h1 className="text-2xl font-bold ">Method</h1>
          <select
            onChange={(event) => setMethod(event.target.value)}
            name="method"
            id=""
          >
            <option>One Pot</option>
            <option>Fried</option>
            <option>Slow Cooker</option>
            <option>Grilled</option>
          </select>
          <h1 className="text-2xl font-bold ">CUT</h1>
          <select
            onChange={(event) => setCut(event.target.value)}
            name="cut"
            id=""
          >
            <option>Breast</option>
            <option>Drumstick</option>
            <option>Thigh</option>
            <option>Wings</option>
          </select>
          <h1 className="text-2xl font-bold ">Course</h1>
          <select
            onChange={(event) => setCourse(event.target.value)}
            name="course"
            id=""
          >
            <option>Appetizers</option>
            <option>Breakfast</option>
            <option>Dinners</option>
            <option>Lunch</option>
          </select>
          <h1 className="text-2xl font-bold ">Cuisine</h1>
          <select
            onChange={(event) => setCuisine(event.target.value)}
            name="cuisine"
            id=""
          >
            <option>American</option>
            <option>Asian</option>
            <option>Indian</option>
            <option>Italian</option>
          </select>
          <h1 className="text-2xl font-bold ">FLAVOR</h1>
          <select
            onChange={(event) => setFlavor(event.target.value)}
            name="flavor"
            id=""
          >
            <option>Savory</option>
            <option>Healthy</option>
            <option>Spicy</option>
            <option>Sweet</option>
          </select>
          <div>
            <h1 className="text-2xl font-bold ">Difficulty</h1>

            <label htmlFor="Easy">
              <input
                id="Easy"
                type="radio"
                name="difficulty"
                onChange={(event) => setDifficulty(event.target.value)}
                value="Easy"
              />
              Easy
            </label>
            <label htmlFor="Medium">
              <input
                id="Medium"
                type="radio"
                name="difficulty"
                onChange={(event) => setDifficulty(event.target.value)}
                value="Medium"
              />
              Medium
            </label>
            <label htmlFor="Hard">
              <input
                id="Hard"
                type="radio"
                name="difficulty"
                onChange={(event) => setDifficulty(event.target.value)}
                value="Hard"
              />
              Hard
            </label>
          </div>
          <div>
            <h1 className="text-2xl font-bold ">Image</h1>
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
    </div>
  );
}

export default NewRecipe;
