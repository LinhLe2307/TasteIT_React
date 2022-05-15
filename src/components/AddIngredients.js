import React from "react";

const AddIngredients = ({ remove, ingredientId, inputHandler, idHandler }) => {
  return (
    <div>
      <p>{ingredientId}</p>
      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        // onChange={() => {
        //   idHandler(ingredientId);
        // }}
      />
      <label htmlFor="unit">Unit</label>
      <input
        type="text"
        id="unit"
        name="unit"
        // onChange={() => {
        //   idHandler(ingredientId);
        // }}
      />
      <label htmlFor="ingredient">Ingredient</label>
      <input
        type="text"
        id="ingredient"
        name="ingredient"
        // onChange={() => {
        //   idHandler(ingredientId);
        // }}
      />
      <button onClick={() => remove(ingredientId)}>X</button>
    </div>
  );
};

export default AddIngredients;
