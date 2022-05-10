import React from "react";

const AddIngredients = ({ remove, ingredientId }) => {
  return (
    <div>
      <label htmlFor="quantity">Quantity</label>
      <input type="text" id="quantity" name="quantity" />
      <label htmlFor="unit">Unit</label>
      <input type="text" id="unit" name="unit" />
      <label htmlFor="ingredient">Ingredient</label>
      <input type="text" id="ingredient" name="ingredient" />
      <button onClick={() => remove(ingredientId)}>X</button>
    </div>
  );
};

export default AddIngredients;
