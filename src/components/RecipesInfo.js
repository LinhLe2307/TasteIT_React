import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipesInfo = ({}) => {
  const { id } = useParams();
  const [recipesSingle, setRecipesSingle] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3010/notes/${id}`)
      .then((res) => setRecipesSingle(res.data));
  }, []);
  return (
    <>
      {recipesSingle && (
        <div className="recipes-single">
          <div>
            <h1>{recipesSingle.name}</h1>
            <img src={recipesSingle.image} />
            <h3>Ingredients</h3>
            {recipesSingle.ingredients.map((ingredient) => (
              <p key={ingredient.id}>
                {ingredient.quantity}
                {ingredient.unit} - {ingredient.ingredient}
              </p>
            ))}
          </div>
          <div>
            <p>{recipesSingle.description}</p>
            <p>{recipesSingle.author}</p>
            <h3>Preparation</h3>
            <p>{recipesSingle.instructions}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipesInfo;
