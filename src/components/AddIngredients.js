import React from "react";
import classes from "./module/AddIngredients.module.css";

const AddIngredients = ({
  ingredientList,
  remove,
  ingredientId,
  changeIngreInput,
  index,
}) => {
  return (
    <div className={`${classes["ingre-container"]}`}>
      <label htmlFor="quantity">Quantity</label>
      <input
        required
        className={`${classes.field}`}
        type="text"
        id="quantity"
        name="quantity"
        defaultValue={ingredientList.quantity}
        onChange={(e) => changeIngreInput(e, index)}
      />
      <label htmlFor="unit">Unit</label>
      <input
        required
        className={`${classes.field}`}
        type="text"
        id="unit"
        name="unit"
        onChange={(e) => changeIngreInput(e, index)}
        defaultValue={ingredientList.unit}
      />
      <label htmlFor="ingredient">Ingredient</label>
      <input
        required
        className={`${classes.field}`}
        type="text"
        id="ingredient"
        name="ingredient"
        onChange={(e) => changeIngreInput(e, index)}
        defaultValue={ingredientList.ingredient}
      />
      <button onClick={() => remove(ingredientId)}>X</button>
    </div>
  );
};

export default AddIngredients;
