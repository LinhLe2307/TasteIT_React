import React from 'react'

const RecipesCard = ({image, name, description}) => {
  return (
    <div className="recipes-card">
        <img src={`${image}`} />
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}

export default RecipesCard