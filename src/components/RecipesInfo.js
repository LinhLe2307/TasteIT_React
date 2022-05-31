import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./module/RecipesInfo.module.css";

const RecipesInfo = ({}) => {
  const { id } = useParams();
  const [recipesSingle, setRecipesSingle] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:3010/notes/${id}`).then((res) => {
      setRecipesSingle(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {recipesSingle && (
        <div className={`${classes["recipes-box"]}`}>
          <h1>{recipesSingle.name}</h1>
          <div className={`${classes["recipes-card"]}`}>
            <div className={`${classes["recipes-info"]}`}>
              <img src={recipesSingle.image} />

              <div className={`${classes["recipes-text"]}`}>
                <p>{recipesSingle.description}</p>
                <p style={{ fontStyle: "italic" }}>by {recipesSingle.author}</p>
              </div>
            </div>
            <div className={`${classes["recipes-single"]}`}>
              <div>
                <h3>Ingredients</h3>
                {recipesSingle.ingredients.map((ingredient) => (
                  <p
                    key={ingredient.id}
                    className={`${classes["recipes-ingredients"]}`}
                  >
                    {ingredient.quantity}
                    {ingredient.unit} - {ingredient.ingredient}
                  </p>
                ))}
              </div>
              <div className={`${classes["recipes-preparation"]}`}>
                <h3>Preparation</h3>
                <p>{recipesSingle.instructions}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipesInfo;
