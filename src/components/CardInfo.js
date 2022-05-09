import React from 'react';

function CardInfo({name, description}) {
  return (
    <>
        <h3>{name}</h3>
        <p>{description}</p>
       
    </>
  )
}

export default CardInfo