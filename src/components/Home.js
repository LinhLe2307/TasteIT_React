import React from "react";
import { Link } from "react-router-dom";

import background from "../assets/videos/background.mp4";
import classes from "./module/Home.module.css";

const Main = () => {
  return (
    <main>
      <div className={`${classes["video-container"]}`}>
        <video muted loop className={`${classes.myVideo}`} autoPlay={true}>
          <source src={background} type="video/mp4" />
        </video>
        <div className={`${classes["recipes-info"]}`}>
          <h1>TasteIT</h1>
          <p>
            TasteIT is recipe app which is made in REACT21K group React lessons
          </p>
          <button className={`${classes.btn}`}>
            <Link to="/browse-recipes">Browse recipes</Link>
          </button>
        </div>
      </div>
      <h1 className={`${classes.title}`}>Looking for the recipes?</h1>
      <div className={`${classes["recipes-container"]}`}>
        <div className={`${classes.selection}`}>
          <h3>Browse recipes</h3>
          <p>
            Find your favourites in this collection. You can search recipes
            based on name or country
          </p>
          <Link to="/browse-recipes">All recipes</Link>
        </div>
        <div className={`${classes.selection}`}>
          <h3>Add recipes</h3>
          <p>Recipes from your country is missing? No worries, add one!</p>
          <Link to="/add-recipes">Add recipes</Link>
        </div>
        <div className={`${classes.selection}`}>
          <h3>Want to know more about our projects?</h3>
          <p>Visit our programme homepage</p>
          <a href="https://www.bc.fi/" target="_blank">
            Business Helsinki College homepage
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
