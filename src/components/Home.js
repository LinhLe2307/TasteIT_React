import React from "react";
import { Link } from "react-router-dom";

import CardInfo from "./CardInfo";
import background from "../assets/videos/background.mp4";
import classes from "./Home.module.css";

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
          <CardInfo
            name="Browse recipes"
            description="Find your favourites in this collection. You can search recipes based on name or country"
            linkName="All recipes"
            linkURL="/browse-recipes"
          />
        </div>
        <div className={`${classes.selection}`}>
          <CardInfo
            name="Add recipes"
            description="Recipes from your country is missing? No worries, add one!"
            linkName="Add recipes"
            linkURL="/add-recipes"
          />
        </div>
        <div className={`${classes.selection}`}>
          <CardInfo
            name="Want to know more about our projects?"
            description="Visit our programme homepage"
            linkName="Business Helsinki College homepage"
            linkURL="/bc.fi/"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
