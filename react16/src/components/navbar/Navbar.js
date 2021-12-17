import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

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
            <GiHamburgerMenu className={`${style.navButton}`} />
          </button>
        </div>
        <Link to={"/"}>
          <h1 className="heading-2 m-2 flex gap-2">
            <FaWarehouse className="self-center" />{" "}
            <span className={`${style.title}`}>STOCKAREA</span>
          </h1>
        </Link>
        <div className="flex-1 flex">
          <input
            className={`${style.input}`}
            onKeyPress={(e) => filterSearchHandler(e.target.value)}
          />
        </div>
        <nav className={`${style.link} flex flex-row flex-wrap gap-2 m-2`}>
          <Link to={"/"} className={`${style.link}`}>
            <AiFillHome className={`${style.navIcon}`} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
