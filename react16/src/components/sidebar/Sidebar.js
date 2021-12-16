import React from "react";
import style from "./Sidebar.module.css";

function Sidebar(props) {
  return (
    <div className={`${props.sidebarToggle ? `${style.sideDiv}` : `${style.displayNone}`} ${style.sidenavWidth} border`}>
      
    </div>
  );
}

export default Sidebar;
