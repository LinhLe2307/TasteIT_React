import { React, useState, useEffect } from "react";
import axios from "axios";

import AddIngredients from "./AddIngredients";
import classes from "./AddRecipes.module.css";

const AddRecipes = () => {
  const [ingredientsValue, setIngredientsValue] = useState(0);

  const [ingredients, setIngredients] = useState([
    {
      quantity: "",
      unit: "",
      ingredient: "",
      id: ingredientsValue,
    },
  ]);

  const [recipes, setRecipes] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
    instructions: "",
    ingredients: ingredients,
  });

  const [id, setId] = useState();

  const idHandler = (id) => {
    setId(id);
  };

  const inputHandler = (e) => {
    setRecipes(() => ({
      ...recipes,
      [e.target.name]: e.target.value,
    }));

    const newIngredients = [...ingredients];
    const list = newIngredients.map((newIngredient) => {
      // if (newIngredient.id === id)
      return {
        ...newIngredient,
        [e.target.name]: e.target.value,
      };
    });
    setIngredients(list);
  };

  const addSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3010/notes", recipes)
      .then((res) => console.log("success", res))
      .catch((error) => console.log("error", error));

    setRecipes("");
  };

  const addIngredientsHandler = () => {
    setIngredientsValue((prevState) => prevState + 1);

    const values = [...ingredients];
    ingredientsValue &&
      values.push({
        quantity: "",
        unit: "",
        ingredient: "",
        id: ingredientsValue,
      });
    setIngredients(values);
  };

  const removeIngredientsHandler = (ingredientId) => {
    const values = [...ingredients];
    const newIngredients = values.filter(
      (ingredient) => ingredient.id !== ingredientId
    );
    setIngredients(newIngredients);
  };

  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

  return (
    <div>
      <h1>Add New Recipe</h1>
      <form onChange={inputHandler} onSubmit={addSubmitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={recipes.name}
            // onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            className="text-input"
            type="text"
            id="author"
            name="author"
            // onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="country">Recipe is from</label>
          <input
            type="text"
            id="country"
            name="country"
            defaultValue={recipes.country}
            // onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            defaultValue={recipes.description}
            // onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={recipes.image}
            // onChange={inputHandler}
          />
        </div>
        <div>
          <label>Ingredients</label>
          {ingredients.map((ingredient) => {
            return (
              <AddIngredients
                key={`${ingredient.id} `}
                remove={removeIngredientsHandler}
                ingredientId={ingredient.id}
                idHandler={() => idHandler(ingredient.id)}
                // inputHandler={inputHandler}
                // onChange={inputHandler}
              />
            );
          })}
          <button type="button" onClick={addIngredientsHandler}>
            {" "}
            Add more ingredients
          </button>
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            defaultValue={recipes.instructions}
            // onChange={inputHandler}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddRecipes;
