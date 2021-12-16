import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

var timeout;
function Navbar(props) {
  function filterSearchHandler(value) {
    // reduce calls
    if (timeout) {
      console.log("clearing timeout");
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      props.filterItems(value);
    }, 500);
  }
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
          <h1 className="heading-2 m-2">
            🌍 <span className={`${style.title}`}>STOCKAREA</span>
          </h1>
        </Link>
        <div className="flex-1 flex">
          <input
            className={`${style.input}`}
            onKeyPress={(e) => filterSearchHandler(e.target.value)}
          />
        </div>
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
