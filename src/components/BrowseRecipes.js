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
      const nameList = recipesLists.filter(
        (list) =>
          list.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
      setFilterResults(nameList);
    } else {
      setFilterResults(recipesLists);
    }
  };

  return (
    <div className={`${classes["browse-recipes-container"]}`}>
      <input onChange={searchHandler} />
      <h1>Our Recipes</h1>
      <div className="recipes-cards">
        {filterResults &&
          filterResults.map((filterResult) => (
            <RecipesCard
              key={filterResult.id}
              {...filterResult}
              imgURL={flagsList[filterResult.country]}
            />
          ))}
      </div>
    </div>
  );
};

export default BrowseRecipes;
