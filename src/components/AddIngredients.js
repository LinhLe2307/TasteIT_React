import React from "react";

const AddIngredients = ({
  ingredient,
  remove,
  ingredientId,
  changeIngreInput,
  index,
}) => {
  return (
    <div>
      <p>{index}</p>
      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        defaultValue={ingredient.quantity}
        onChange={(e) => changeIngreInput(e, index)}

      />
      <label htmlFor="unit">Unit</label>
      <input
        type="text"
        id="unit"
        name="unit"
        onChange={(e) => changeIngreInput(e, index)}
        defaultValue={ingredient.unit}

      />
      <label htmlFor="ingredient">Ingredient</label>
      <input
        type="text"
        id="ingredient"
        name="ingredient"
        onChange={(e) => changeIngreInput(e, index)}
        defaultValue={ingredient.ingredient}

      />
      <button onClick={() => remove(ingredientId)}>X</button>
    </div>
  );
};

export default AddIngredients;
