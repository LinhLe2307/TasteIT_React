import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipesCard from "./RecipesCard";
import classes from "./BrowseRecipes.module.css";

const BrowseRecipes = () => {
  const [recipesLists, setRecipesLists] = useState("");
  const [filterResults, setFilterResults] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3010/notes")
      .then((res) => setRecipesLists(res.data))
      .catch((error) => console.log(error));
  }, []);

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm == "") {
      setFilterResults(recipesLists);
    } else {
      const nameList = recipesLists.filter((list) =>
        list.name
          ? list.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
          : ""
      );
      setFilterResults(nameList);
    }
  };
  return (
    <div className={`${classes["browse-recipes-container"]}`}>
      <input onChange={searchHandler} />
      <h1>Our Recipes</h1>
      <div className="recipes-cards">
        {filterResults &&
          filterResults.map((recipesList) => (
            <RecipesCard key={recipesList.id} {...recipesList} />
          ))}
      </div>
    </div>
  );
};

export default BrowseRecipes;
