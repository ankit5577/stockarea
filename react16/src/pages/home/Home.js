import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import useHttp from "../../services/Hooks/use-http";
import style from "./Home.module.css";
import notFoundImage from "../../assets/images/not_found.svg";

import { useSelector, useDispatch } from "react-redux";
import { fetchWarehousesStore } from "../../services/warehouse/warehouseSlice";
import ProductListCard from "../../components/product-list-card/ProductListCard";

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
          <h1 className={`heading-1 font-lighter letter-spacing-2 my-4`}>
            List of Warehouse
          </h1>
          {warehouses?.map((warehouse) => (
            <Link to={`/warehouse/${warehouse._id}`} key={warehouse._id}>
              <ProductListCard warehouse={warehouse} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
