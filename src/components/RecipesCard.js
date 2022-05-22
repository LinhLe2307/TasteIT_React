import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./RecipesCard.module.css";

const RecipesCard = ({
  id,
  author,
  image,
  name,
  description,
  flagURL,
  deleteHandler,
}) => {
  return (
    <div className={`${classes["recipes-wrapper"]}`}>
      <div className={`${classes["recipes-card"]}`}>
        <div className={`${classes.flags}`}>
          <img src={flagURL} />
        </div>
        <img src={`${image}`} />
        <div className={`${classes["recipes-text"]}`}>
          <h3>{name}</h3>
          <p className={`${classes.author}`}>
            by <span>{author}</span>
          </p>
          <p>{description}</p>
          {/* This is different from <Link to={`/${id}`}> which is creating a new Url*/}
          {/* This below will be a child of browse-recipes */}
          <div className={`${classes.link}`}>
            <Link to={`${id}`}>See more</Link>
            <button onClick={() => deleteHandler(id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
