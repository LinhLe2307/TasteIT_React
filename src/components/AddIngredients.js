import React from "react";

const AddIngredients = ({
  ingredient,
  remove,
  ingredientId,
  inputHandler,
  idHandler,
}) => {
  return (
    <div>
      <p>{ingredientId}</p>
      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        defaultValue={ingredient.quantity}
        onChange={inputHandler}
        // onChange={() => {
        //   idHandler(ingredientId);
        // }}
      />
      <label htmlFor="unit">Unit</label>
      <input
        type="text"
        id="unit"
        name="unit"
        onChange={inputHandler}
        defaultValue={ingredient.unit}
        // onChange={() => {
        //   idHandler(ingredientId);
        // }}
      />
      <label htmlFor="ingredient">Ingredient</label>
      <input
        type="text"
        id="ingredient"
        name="ingredient"
        onChange={inputHandler}
        defaultValue={ingredient.ingredient}
        // onChange={() => {
        //   idHandler(ingredientId);
        // }}
      />
      <button onClick={() => remove(ingredientId)}>X</button>
    </div>
  );
};

export default AddIngredients;
