import { React, useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";
import AddIngredients from "./AddIngredients";

const AddRecipes = () => {
  const [recipes, setRecipes] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
    instructions: "",
  });
  const [ingredients, setIngredients] = useState([
    {
      quantity: "",
      unit: "",
      ingredient: "",
    },
  ]);

  const [moreIngredients, setMoreIngredients] = useState([{ value: null }]);

  const [id, setId] = useState();

  const idHandler = (id) => {
    setId(id);
  };

  const inputHandler = (e) => {
    setRecipes(() => ({
      ...recipes,
      [e.target.name]: e.target.value,
    }));

    const values = [...ingredients];
    const list = values.map((value, i) => {
      if (i === id)
        return {
          ...value,
          [e.target.name]: e.target.value,
        };
    });

    setIngredients(list);
  };

  const addSubmitHandler = (event) => {
    // let data = {
    //   objects: [recipes, ingredients],
    // };
    event.preventDefault();
    axios
      .post("http://localhost:3010/notes", { recipes, ingredients })
      .then((res) => console.log("success", res))
      .catch((error) => console.log("error", error));

    setRecipes("");
    setIngredients("");
  };

  const addIngredientsHandler = () => {
    const values = [...moreIngredients];
    values.push({ value: null });
    setMoreIngredients(values);

    const values2 = [...ingredients];
    console.log(ingredients);
    values2.push({
      quantity: "",
      unit: "",
      ingredient: "",
    });
    setIngredients(values2);
  };

  const removeIngredientsHandler = (ingredientId) => {
    const values = [...moreIngredients];
    console.log("remove", ingredientId);

    console.log("more", values.splice(id, 1));

    // const values = moreIngredients.filter(
    //   (ingredient, index) => index !== ingredientId
    // );
    setMoreIngredients(values);
  };

  useEffect(() => {
    console.log(moreIngredients);
  }, [moreIngredients]);

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
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" />
        </div>
        <div>
          <label htmlFor="country">Recipe is from</label>
          <input
            type="text"
            id="country"
            name="country"
            defaultValue={recipes.country}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            defaultValue={recipes.description}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={recipes.image}
          />
        </div>
        <div>
          <label>Ingredients</label>
          {moreIngredients.map((ingredient, index) => {
            return (
              <AddIngredients
                key={`${ingredient} - ${index} `}
                remove={removeIngredientsHandler}
                ingredientId={index}
                idHandler={() => idHandler(index)}
              />
            );
          })}
          <button onClick={addIngredientsHandler}>Add more ingredients</button>
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            defaultValue={recipes.instructions}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddRecipes;
