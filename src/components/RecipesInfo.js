import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const RecipesInfo = ({ }) => {
  const { id } = useParams();
  const [recipesSingle, setRecipesSingle] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3010/notes/${id}`)
      .then((res) => setRecipesSingle(res.data));
  }, []);
  return (
    <>
      {recipesSingle && <div>
        <div>
          <h1>{recipesSingle.name}</h1>
          <img src={recipesSingle.image} />
        </div>
        <div>
          <p>{recipesSingle.description}</p>
          <p>{recipesSingle.author}</p>
        </div>
        <div>
          <h3>Ingredients</h3>
        </div>
        <div>
          <h3>Preparation</h3>
          <p>{recipesSingle.instructions}</p>
        </div>
      </div>}
    </>
  );
};

export default RecipesInfo;
