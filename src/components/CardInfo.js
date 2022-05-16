import React from 'react';
import { Link } from "react-router-dom"

function CardInfo({ name, description, linkName, linkURL }) {
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`${linkURL}`}>{linkName}</Link>
    </>
  )
}

export default CardInfo