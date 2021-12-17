import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router";

import { filterWarehousesStore } from "../../services/warehouse/warehouseSlice";
import { useDispatch } from "react-redux";

var stockarea_search_timeout;
function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dispatchFilterWarehouse = (data) => {
    dispatch(
      filterWarehousesStore({
        type: "SEARCH_PRODUCT",
        data: data.trim().toLowerCase(),
      })
    );
  };

  function filterSearchHandler(e) {
    if (e.which === 13) {
      // search on Enter Keypress
      console.log("searching ");
      navigate("/");
      setTimeout(() => {
        dispatchFilterWarehouse(e.target.value);
      }, 500);
    } else {
      // using DEBOUNCE to reduce search calls
      if (stockarea_search_timeout) {
        clearTimeout(stockarea_search_timeout);
      }
      stockarea_search_timeout = setTimeout(() => {
        dispatchFilterWarehouse(e.target.value);
      }, 1000);
    }
  }
  return (
    <header>
      <div className={`container mx-auto ${style.div} p-2`}>
        <div className="flex">
          <button
            className="self-center rounded-full "
            onClick={props.sidebarToggle}
          >
            <GiHamburgerMenu className={`${style.navButton} box-shadow`} />
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
            placeholder="Search literally anything...."
            className={`${style.input} smooth-font`}
            onKeyPress={(e) => filterSearchHandler(e)}
          />
        </div>
        <nav className={`${style.link} flex flex-row flex-wrap gap-2 m-2`}>
          <Link to={"/"} className={`${style.link}`}>
            <AiFillHome
              className={`${style.navIcon} box-shadow rounded-full`}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
