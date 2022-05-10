import React from 'react'

const AddIngredients = () => {
    return (
        <div>
            <label htmlFor="quantity">Quantity</label>
            <input type="text" id="quantity" name="quantity" />
            <label htmlFor="ingredient">Ingredient</label>
            <input type="text" id="ingredient" name="ingredient" />
        </div>
    )
}

export default AddIngredients