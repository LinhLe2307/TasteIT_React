import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipesCard from "./RecipesCard";
import classes from "./module/BrowseRecipes.module.css";

const BrowseRecipes = () => {
  const [recipesLists, setRecipesLists] = useState([]);
  const [filterResults, setFilterResults] = useState([]);
  const [flagsList, setFlagsList] = useState({});
  const [inputSearch, setInputSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = () => {
    axios
      .get("http://localhost:3010/notes")
      .then((res) => {
        // console.log(res.data);
        setFilterResults(res.data);
        setRecipesLists(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setIsLoading(true);
    fetchRecipes();
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data)
      .then((res) =>
        res.map((data) => ({ [data.name.common]: data.flags.png }))
      )
      .then((res) => {
        setFlagsList(Object.assign({}, ...res));
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    setInputSearch(searchTerm);
    const nameList = recipesLists?.filter((list) => {
      const recipeName = list.name.toLowerCase();
      const countryName = list.country.toLowerCase();
      return (
        recipeName.indexOf(searchTerm.trim().toLowerCase()) !== -1 ||
        countryName.indexOf(searchTerm.trim().toLowerCase()) !== -1
      );
    });
    setFilterResults(nameList);
  };

  const deleteHandler = (recipeId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete(`http://localhost:3010/notes/${recipeId}`)
        .then((res) => console.log("success", res))
        .then((res) => fetchRecipes())
        .catch((error) => console.log("error", error));
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={`${classes["browse-recipes-container"]}`}>
      <input
        onChange={(e) => searchHandler(e)}
        placeholder="Search by name or by country ..."
        value={inputSearch}
      />
      <h1>Our Recipes</h1>
      <div className={`${classes["recipes-cards"]}`}>
        {filterResults &&
          filterResults.map((filterResult) => (
            <RecipesCard
              key={filterResult.id}
              {...filterResult}
              flagURL={flagsList[filterResult.country]}
              deleteHandler={deleteHandler}
            />
          ))}
      </div>
      {recipesLists.length === 0 && (
        <h3 style={{ margin: "0 auto" }}>Please add your recipes!</h3>
      )}
    </div>
  );
};

export default BrowseRecipes;
