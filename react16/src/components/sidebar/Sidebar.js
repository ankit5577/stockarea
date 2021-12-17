import React from "react";
import style from "./Sidebar.module.css";

import { filterWarehousesStore } from "../../services/warehouse/warehouseSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function Sidebar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dispatchFilterWarehouse = (element) => {
    console.log(element.name, element.value);
    // dispatch(
    //   filterWarehousesStore({
    //     type: "SEARCH_PRODUCT",
    //     filter: data.trim().toLowerCase(),
    //   })
    // );
  };

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
          <input
            name="is_available"
            type={"checkbox"}
            onChange={(e) => dispatchFilterWarehouse(e.target)}
          />{" "}
          <p className="text-dark-grey"> Available</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
