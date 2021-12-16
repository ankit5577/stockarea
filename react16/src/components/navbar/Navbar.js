import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className={`container mx-auto ${style.div} p-2`}>
        <Link to={"/"}>
          <h1 className="heading-2 m-2">🌍 STOCKAREA</h1>
        </Link>
        <div className="flex-1"></div>
        <nav className={`${style.link} flex flex-row flex-wrap gap-2 m-2`}>
          <Link to={"/"} className="list">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
