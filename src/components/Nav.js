import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/browse-recipes">Recipes</Link>
      <Link to="/add-recipes">Add new recipe</Link>
    </>
  );
};

export default Nav;
