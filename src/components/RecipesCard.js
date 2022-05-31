import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./module/RecipesCard.module.css";

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
          <h3>
            <Link to={`${id}`} style={{ color: "black" }}>
              {name}
            </Link>
          </h3>
          <p className={`${classes.author}`}>
            by <span>{author}</span>
          </p>
          <p className={`${classes.description}`}>{description}</p>
          {/* This is different from <Link to={`/${id}`}> which is creating a new Url*/}
          {/* This below will be a child of browse-recipes */}
          <div className={`${classes.link}`}>
            <Link to={`${id}`} className={`${classes["link-more"]}`}>
              See more
            </Link>
            <button
              className={`${classes["btn-delete"]}`}
              onClick={() => deleteHandler(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
