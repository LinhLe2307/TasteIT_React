import { React, useState, useEffect } from "react";
import axios from "axios";

import AddIngredients from "./AddIngredients";
import classes from "./module/AddRecipes.module.css";

const AddRecipes = () => {
  // Add ingredients id so it will be unique
  const [ingredientsValue, setIngredientsValue] = useState(0);

  // Separated list of ingredients
  const [ingredients, setIngredients] = useState([
    {
      quantity: "",
      unit: "",
      ingredient: "",
      id: ingredientsValue,
    },
  ]);

  // List of fetched countries
  const [countries, setCountries] = useState();

  // Everytime a country option is selected, it will be store in selectedCountry state
  const [selectedCountry, setSelectedCountry] = useState("");

  const [recipes, setRecipes] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
    instructions: "",
    ingredients: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Ingredients' inputs changing
  const changeIngreInput = (e, index) => {
    const newIngreList = [...ingredients];
    newIngreList[index][e.target.name] = e.target.value;
    setIngredients(newIngreList);
  };

  // Input changing
  const inputHandler = (e) => {
    setRecipes(() => ({
      ...recipes,
      [e.target.name]: e.target.value,
      country: selectedCountry,
      ingredients: ingredients,
    }));
  };

  // Submit the recipe
  const addSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3010/notes", recipes)
      .then((res) => setIsSubmitted(true))
      .catch((error) => console.log("error", error));
  };

  // Everytime a button is clicked, a new value is created
  const addIngredientsHandler = () => {
    setIngredientsValue((prevState) => prevState + 1);
  };

  useEffect(() => {
    const values = [...ingredients];
    if (ingredientsValue) {
      values.push({
        quantity: "",
        unit: "",
        ingredient: "",
        id: ingredientsValue,
      });
      setIngredients(values);
    }
  }, [ingredientsValue]);

  // Remove one list of ingredient from browser
  const removeIngredientsHandler = (ingredientId) => {
    if (window.confirm("Are you sure you want to remove?")) {
      const values = [...ingredients];
      const newIngredients = values.filter(
        (ingredient) => ingredient.id !== ingredientId
      );
      setIngredients(newIngredients);
    }
  };

  // Store chosen country option in selectedCountry state
  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const closeHandler = (e) => {
    setIsSubmitted(false);
  };

  // Fetch countries API and Store countries' array in countries state
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data)
      .then((res) => {
        setCountries(res.map((data) => data.name.common).sort());
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* {!isSubmitted && (
        <> */}
      <h1 className={`${classes["new-recipe"]}`}>Add New Recipe</h1>
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
            defaultValue={recipes.author}
          />
        </div>
        <div>
          <label htmlFor="country">Recipe is from</label>
          <select defaultValue={selectedCountry} onChange={handleChange}>
            <option value="" invalid="true" hidden>
              Choose a country...
            </option>
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
          <div className={classes["ingredients"]}>
            <label>Ingredients: </label>
            {ingredients.map((ingredient, index) => {
              return (
                <AddIngredients
                  key={`${ingredient.id} `}
                  remove={removeIngredientsHandler}
                  ingredientId={ingredient.id}
                  index={index}
                  changeIngreInput={changeIngreInput}
                  ingredientList={ingredient}
                />
              );
            })}
          </div>
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
      {/* </>
      )} */}
      {isSubmitted ? (
        <div className={classes["popup"]}>
          <div className={classes["modal"]}>
            <p>Submitted successfully</p>
            <button onClick={closeHandler}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddRecipes;
