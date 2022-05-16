import React from "react";
import { Link } from "react-router-dom";

import CardInfo from "./CardInfo";
import background from "../assets/videos/background.mp4";

const Main = () => {
  return (
    <main>
      <div>
        <video muted loop id="myVideo" controls="controls" autoplay="true">
          <source src={background} type="video/mp4" />
        </video>
      </div>
      <div className="recipes-info">
        <h1>TasteIT</h1>
        <p>
          TasteIT is recipe app which is made in REACT21K group React lessons
        </p>
        <Link to="/browse-recipes">Browse recipes</Link>
      </div>
      {/* </video> */}
      <h1 className="title">Looking for the recipes?</h1>
      <div className="recipes-container">
        <div className="selection">
          <CardInfo
            name="Browse recipes"
            description="Find your favourites in this collection. You can search recipes based on name or country"
            linkName="All recipes"
            linkURL="/browse-recipes"
          />
        </div>
        <div className="selection">
          <CardInfo
            name="Add recipes"
            description="Recipes from your country is missing? No worries, add one!"
            linkName="Add recipes"
            linkURL="/add-recipes"
          />
        </div>
        <div className="selection">
          <CardInfo
            name="Want to know more about our projects?"
            description="Visit our programme homepage"
            linkName="Business Helsinki College homepage"
            linkURL="/about"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
