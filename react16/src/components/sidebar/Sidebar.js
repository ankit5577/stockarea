import React, { useState } from "react";
import style from "./Sidebar.module.css";

import { filterWarehousesStore } from "../../services/warehouse/warehouseSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function Sidebar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const dispatchFilterWarehouse = () => {
    setIsChecked(() => !isChecked);
    dispatch(
      filterWarehousesStore({
        type: "AVAILABLE_FILTER",
        data: !isChecked,
      })
    );
  };

  return (
    <div
      className={`${
        props.sidebarToggle ? `${style.sideDiv}` : `${style.displayNone}`
      } ${style.sidenavWidth} ${style.sidenav} border`}
    >
      <div className={`${style.subDiv}`}>
        <h3 className={`${style.subHeading}`}>Live</h3>
        <div className={`${style.checkboxDiv}`}>
          <input
            name="is_available"
            type={"checkbox"}
            value="is_available"
            checked={isChecked}
            onChange={(e) => dispatchFilterWarehouse()}
          />{" "}
          <p className="text-dark-grey">Live</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
