import React from 'react'

const AddRecipes = () => {
  return (
    <div>
      <h1>Add New Recipe</h1>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Author</label>
        <input type="text" />
      </div>
      <div>
        <label>Recipe is from</label>
        <input type="text" />
      </div>
      <div>
        <label>Description</label>
        <textarea type="text" />
      </div>
      <div>
        <label>Image</label>
        <input type="text" />
      </div>
      <div>
        <label>Ingredient</label>
        <label>Quantity</label>
        <input type="text" />
      </div>

    </div>
  )
}

export default AddRecipes