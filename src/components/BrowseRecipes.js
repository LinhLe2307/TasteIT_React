import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipesCard from "./RecipesCard";
import classes from "./BrowseRecipes.module.css";

const BrowseRecipes = () => {
  const [recipesLists, setRecipesLists] = useState([]);
  const [filterResults, setFilterResults] = useState([]);
  const [flagsList, setFlagsList] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3010/notes")
      .then((res) => setRecipesLists(res.data))
      .catch((error) => console.log(error));
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data)
      .then((res) =>
        res.map((data) => ({ [data.name.common]: data.flags.png }))
      )
      .then((res) => setFlagsList(Object.assign({}, ...res)))
      .catch((err) => console.error(err));
  }, []);

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm !== "") {
      const nameList = recipesLists.filter((list) =>
        // list.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        list.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterResults(nameList);
    } else {
      setFilterResults(recipesLists);
    }
  };

  const deleteHandler = (recipeId) => {
    const nameList = recipesLists.filter(
      (recipesList) => recipesList.id != recipeId
    );
    setFilterResults(nameList);

    axios
      .delete(`http://localhost:3010/notes/${recipeId}`)
      .then((res) => console.log("success", res))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={`${classes["browse-recipes-container"]}`}>
      <input onChange={searchHandler} placeholder="Search..." />
      <h1>Our Recipes</h1>
      <div className={`${classes["recipes-cards"]}`}>
        {filterResults.map((filterResult) => (
          <RecipesCard
            key={filterResult.id}
            {...filterResult}
            flagURL={flagsList[filterResult.country]}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseRecipes;
