import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipesCard from './RecipesCard';

const BrowseRecipes = () => {
  const [recipesLists, setRecipesLists] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3010/notes")
      .then(res => setRecipesLists(res.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='recipes-cards'>
      {recipesLists && recipesLists.map((recipesList) => (
        <RecipesCard
          key={recipesList.id} 
          {...recipesList}
        />
      ))
      }
    </div>
  )
}

export default BrowseRecipes