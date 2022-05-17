import { React, useState, useEffect } from "react";
import axios from "axios";

import AddIngredients from "./AddIngredients";
import classes from "./AddRecipes.module.css";

const AddRecipes = () => {
  const [ingredientsValue, setIngredientsValue] = useState(0);
  const [countries, setCountries] = useState();
  const [selectCountry, setSelectCountry] = useState("");

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
    ingredients: [],
  });

  const changeIngreInput = (e, index) => {
    const newIngreList = [...ingredients];
    newIngreList[index][e.target.name] = e.target.value;
    setIngredients(newIngreList);
  };

  const inputHandler = (e) => {
    setRecipes(() => ({
      ...recipes,
      [e.target.name]: e.target.value,
      country: selectCountry,
      ingredients: ingredients,
    }));
  };

  const addSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3010/notes", recipes)
      .then((res) => console.log("success", res))
      .catch((error) => console.log("error", error));

    setRecipes("");
    setIngredientsValue("");
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

  const handleChange = (e) => {
    setSelectCountry(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data)
      .then((res) => setCountries(res.map((data) => data.name.common).sort()))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Add New Recipe</h1>
      <form onSubmit={addSubmitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            defaultValue={recipes.name}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            className="text-input"
            type="text"
            id="author"
            name="author"
            required
            onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="country">Recipe is from</label>
          <select defaultValue={selectCountry} onChange={handleChange}>
            {countries &&
              countries.map((country) => (
                <option key={country} defaultValue={country}>
                  {country}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            required
            type="text"
            id="description"
            name="description"
            defaultValue={recipes.description}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            required
            type="text"
            id="image"
            name="image"
            defaultValue={recipes.image}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label>Ingredients</label>
          {ingredients.map((ingredient, index) => {
            return (
              <AddIngredients
                key={`${ingredient.id} `}
                remove={removeIngredientsHandler}
                ingredientId={ingredient.id}
                index={index}
                changeIngreInput={changeIngreInput}
                ingredient={ingredient}
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
            required
            id="instructions"
            name="instructions"
            defaultValue={recipes.instructions}
            onChange={inputHandler}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddRecipes;
