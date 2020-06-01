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

        <div>
          <button className="link-create-button">
            <Link to="/create" className="nav-link">Create category</Link>
          </button>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
