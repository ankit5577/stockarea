import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import style from "./Home.module.css";

function HomePage() {
  const [warehouses, setWarehouses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(() => true);
    fetch("http://localhost:3000/api/warehouse/all")
      .then((response) => response.json())
      .then((response) => setWarehouses(() => response.data))
      .then(() => setIsLoading(() => false));
  }, []);

  return (
    <div className="flex flex-col container mx-auto p-2">
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          {" "}
          <h1 className={`heading-1 font-light letter-spacing-2`}>
            List of Warehouse
          </h1>
          {warehouses?.map((warehouse) => (
            <Link
              to={`/warehouse/${warehouse._id}`}
              key={warehouse._id}
              className="flex flex-row gap-2 border mx-2 border-radius-lg"
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
                      {warehouse.is_registered ? "✅" : "☑️"}
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
