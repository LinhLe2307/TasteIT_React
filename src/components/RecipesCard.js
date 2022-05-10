import React from 'react'
import { Link } from 'react-router-dom'

const RecipesCard = ({ id, image, name, description }) => {

  return (
    <div className="recipes-card">
      <img src={`${image}`} />
      <h3>{name}</h3>
      <p>{description}</p>
      {/* This is different from <Link to={`/${id}`}> which is creating a new Url*/}
      {/* This below will be a child of browse-recipes */}
      <Link to={`${id}`}>See more</Link>
    </div>
  )
}

export default RecipesCard