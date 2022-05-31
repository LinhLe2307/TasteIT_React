import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/browse-recipes" className="nav-link">
        Recipes
      </Link>
      <Link to="/add-recipes" className="nav-link">
        Add new recipe
      </Link>
    </>
  );
};

export default Nav;
