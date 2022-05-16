import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./RecipesCard.module.css";

const RecipesCard = ({ id, image, name, country, description }) => {
  const [flags, setFlags] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data)
      .then((res) =>
        res.map((data) =>
          data.name.common === country ? setFlags(data.flags.png) : ""
        )
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={`${classes["recipes-wrapper"]}`}>
      <div className={`${classes["recipes-card"]}`}>
        <div className={`${classes.flags}`}>
          <img src={flags} />
        </div>
        <img src={`${image}`} />
        <h3>{name}</h3>
        <p>{description}</p>
        {/* This is different from <Link to={`/${id}`}> which is creating a new Url*/}
        {/* This below will be a child of browse-recipes */}
        <Link to={`${id}`}>See more</Link>
      </div>
    </div>
  );
};

export default RecipesCard;
