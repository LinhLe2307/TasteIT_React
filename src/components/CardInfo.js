import React from 'react';
import { Link } from "react-router-dom"

function CardInfo({ name, description, link }) {
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`${link}`}>{name}</Link>
    </>
  )
}

export default CardInfo