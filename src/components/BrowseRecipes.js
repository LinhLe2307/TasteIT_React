import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipesCard from "./RecipesCard";

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
    if (searchTerm !== "") {
      const nameList = recipesLists.filter(
        (list) => list.recipes.name ? list.recipes.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 : ""
      );
      setFilterResults(nameList);
    } else {
      setFilterResults(recipesLists)
    }
  };
  return (
    <>
      <input onChange={searchHandler} />
      <div className="recipes-cards">
        {filterResults && filterResults.map((recipesList) => (
            <RecipesCard key={recipesList.id} {...recipesList.recipes} />
          ))}
      </div>
    </>
  );
};

export default BrowseRecipes;
