import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>
        DC-News
      </Link>
    </nav>
  );
}

export default Header;