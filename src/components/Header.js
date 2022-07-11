import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <h2>
        <Link to="/" className="nav-link">
          TasteIT App
        </Link>
      </h2>
      <nav>
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
