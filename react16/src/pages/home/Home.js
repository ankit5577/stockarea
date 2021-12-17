import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import useHttp from "../../services/Hooks/use-http";
import style from "./Home.module.css";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import notFoundImage from "../../assets/images/not_found.svg";

import { useSelector, useDispatch } from "react-redux";
import { fetchWarehousesStore } from "../../services/warehouse/warehouseSlice";

function HomePage() {
  const [warehouses, setWarehouses] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const originalWarehouseList = useSelector(
    (state) => state.warehouse.originalWarehouses
  );
  const filteredWarehouses = useSelector(
    (state) => state.warehouse.filteredWarehouses
  );
  const dispatch = useDispatch();

  // dispatching feteched Warehouses to store.
  function dispatchFetchedWarehouses(data) {
    dispatch(
      fetchWarehousesStore({
        type: "FETCHED_WAREHOUSES",
        data,
      })
    );
  }

  // http call to fetch all warehouses.
  const {
    isLoading: fetching,
    error,
    sendRequest: fetchWarehouse,
  } = useHttp("/warehouse/all", {}, (data) => {
    dispatchFetchedWarehouses(data);
  });

  // fetch during initialisation
  useEffect(() => {
    fetchWarehouse();
  }, []);

  useEffect(() => {
    // updates when store warehouse list updates.
    setWarehouses(() => originalWarehouseList);
  }, [originalWarehouseList]);

  useEffect(() => {
    // check if filtered warehouses exists.
    if (filteredWarehouses.length === 0) {
      setNotFound(() => true);
    }
    setWarehouses(() => filteredWarehouses);
  }, [filteredWarehouses]);

  return (
    <div className="flex flex-col container mx-auto p-2">
      {/* no filtered products found */}
      {!fetching && notFound && warehouses.length === 0 && (
        <div className="p-2 mx-auto">
          <img
            className={`${style.notFoundImage}`}
            alt="not found"
            src={notFoundImage}
          />
          <h1 className="heading-2 text-dark-grey text-center">
            No Product found.
          </h1>
        </div>
      )}
      {/* loading component */}
      {(fetching || !warehouses) && <Loading />}
      {/* main component */}
      {!fetching && warehouses.length > 0 && (
        <div>
          {" "}
          <h1 className={`heading-1 font-light letter-spacing-2`}>
            List of Warehouse
          </h1>
          {warehouses?.map((warehouse) => (
            <Link
              to={`/warehouse/${warehouse._id}`}
              key={warehouse._id}
              className={`flex flex-row gap-2 border mx-2 border-radius-lg`}
            >
              <div className="m-2 relative">
                <div className={`${style.imgDiv}`}>
                  <img
                    className={`${style.img}  border-radius-lg`}
                    alt="warehouse img"
                    src={
                      warehouse?.img
                        ? warehouse.img
                        : "https://stockarea.io/assets/user/images/home/storage.jpg"
                    }
                  ></img>
                </div>
                <div
                  className={`${style.live} ${
                    warehouse.is_live ? `${style.is_live}` : ""
                  } rounded-full absolute`}
                ></div>
                <div
                  className={`${
                    warehouse.is_live ? "" : `${style.disabled}`
                  } border-radius-lg`}
                ></div>
                <div className={`${style.cityDiv}`}>
                  <p className="text-center">📍{warehouse.city}</p>
                </div>
              </div>
              <div className="flex-1 p-2">
                <div className={`${style.headingDiv}`}>
                  <h2 className="heading-3 font-medium">{warehouse.name}</h2>
                  <div className="flex">
                    <span className={`${style.registeredLabel}`}>
                      {warehouse.is_registered ? (
                        <TiTick className="color-green self-center icon" />
                      ) : (
                        <ImCross className="color-red self-center icon" />
                      )}
                    </span>
                  </div>
                </div>
                <div className={`text-center flex flex-col`}>
                  <div className={`flex flex-row gap-2 ${style.codeDiv}`}>
                    <div>
                      <p>
                        <span>{warehouse.type}</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        <span>{warehouse.cluster}</span>
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${style.underSubHeader} flex flex-col gap-2`}
                  >
                    <p className={`text-left text-grey`}>
                      Code:{" "}
                      <span className="text-primary font-bold numberFont">
                        {" "}
                        {warehouse.code}
                      </span>
                    </p>
                    <p className={`text-left text-grey`}>
                      Space Available:{" "}
                      <span className="text-primary ">
                        {warehouse.space_available}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
