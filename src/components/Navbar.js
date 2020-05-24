import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div id="home-icon">
          <Link to="/">
            <img src="/images/homelink.png" width="25" height="25" alt="Home" />
          </Link>
        </div>

        <div id="nav-button">
          <button className="link-button" type="submit">
            <Link to="/create">Create category</Link>
          </button>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
