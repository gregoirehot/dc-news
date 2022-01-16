import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex_between_content">
      <div className="navbar-toggler-icon"></div>
      <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>
        DC-News
      </Link>
    </nav>
  );
}

export default Navbar;
