import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <header>
      <div className={`container mx-auto ${style.div} p-2`}>
        <div className="flex">
          <button className="self-center" onClick={props.sidebarToggle}>
            <img
              alt="sidemenu"
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-mobile-application-hamburger-menu-setting-interface-basic-shadow-tal-revivo.png"
            />
          </button>
        </div>
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
