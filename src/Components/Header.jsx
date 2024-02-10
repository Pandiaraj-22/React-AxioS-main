import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          <img className = "logo" src="https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png"></img>
        </a>

        <ul className="navbar-nav ms-auto mb-lg-0 mx-4 fs-5 ">
          <li className="nav-item ">
            <Link className="text-white fs-4" to="/">
            <i id="home-logo"className="fa-solid  fa-house"></i>
            </Link>
          </li>
        </ul>

        <Link className="text-danger fs-3" to="/ListPages">
          <i id="list-logo"className="fa-solid fa-list"></i>
        </Link>
      </div>
    </nav>

  );
}

export default Header;
