import React from "react";
import style from "./Sidebar.module.css";

function Sidebar(props) {
  return (
    <div
      className={`${
        props.sidebarToggle ? `${style.sideDiv}` : `${style.displayNone}`
      } ${style.sidenavWidth} ${style.sidenav} border`}
    >
      <div className={`${style.subDiv}`}>
        <h3 className={`${style.subHeading}`}>Location</h3>
      </div>

      <div className={`${style.subDiv}`}>
        <h3 className={`${style.subHeading}`}>availability</h3>
        <div className={`${style.checkboxDiv}`}>
          <input name="is_available" type={"checkbox"} />{" "}
          <p className="text-dark-grey"> Available</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
