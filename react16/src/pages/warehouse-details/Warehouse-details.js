import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/loading/Loading";
import style from "./Warehouse-details.module.css";

function WarehouseDetailsPage() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(() => true);
    fetch(`http://localhost:3000/api/warehouse/search/${id}`)
      .then((response) => response.json())
      .then((reponse) => setWarehouse(() => reponse.data))
      .then(() => setIsLoading(() => false));
  }, [id]);

  return (
    <div className="flex flex-col container mx-auto p-2">
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="">
          <h1 className={`heading-1 font-light letter-spacing-2`}>
            Warehouse Details
          </h1>
          <div className={`${style.mainDiv} p-2`}>
            <div className={`${style.imgDiv} relative`}>
              <img
                alt="warehouse img"
                src={
                  warehouse?.img
                    ? warehouse.img
                    : "https://stockarea.io/assets/user/images/home/storage.jpg"
                }
              />
              <div
                className={`${
                  warehouse.is_registered
                    ? `${style.registeredDiv}`
                    : `${style.notRegisteredDiv}`
                }`}
              >
                {warehouse.is_registered
                  ? "REGISTERED ✅"
                  : "NOT REGISTERED ❌"}
              </div>
              <div
                className={`${style.liveDiv} ${
                  warehouse.is_live ? `${style.is_live}` : `${style.not_live}`
                }`}
              ></div>
            </div>
            <div className={`${style.detailsDiv} flex-1 flex flex-col gap-2`}>
              <h1>
                {warehouse.name} {warehouse.is_registered ? "✅" : "☑️"}
              </h1>
              <h2 className="heading-3">📍{warehouse.city}, India 🇮🇳</h2>
              <h3 className="heading-3 font-medium text-primary">
                📦 Available Space:{" "}
                <span className="font-bold text-grey numberFont">
                  {" "}
                  {warehouse.space_available}
                </span>
              </h3>
              <p className="heading-3 font-medium text-primary">
                🤷‍♂️ Type:{" "}
                <span className="font-medium text-grey"> {warehouse.type}</span>
              </p>
              <p className="heading-3 font-medium text-primary">
                💭 Cluster:{" "}
                <span className="font-medium text-grey">
                  {" "}
                  {warehouse.cluster}
                </span>
              </p>
              <p className="heading-3 font-medium text-primary">
                🔒 Code:{" "}
                <span className="font-bold text-grey numberFont">
                  {" "}
                  {warehouse.code}
                </span>
              </p>
              <p className="heading-3 font-medium text-primary">
                🙋‍♂️ Status:{" "}
                <span className="font-bold text-grey numberFont">
                  {" "}
                  {warehouse.is_live ? "Live" : "Not Live"}
                </span>
              </p>
              <p className="heading-3 font-medium text-primary">
                🔍 Registered:{" "}
                <span className="font-bold text-grey numberFont">
                  {" "}
                  {warehouse.is_registered ? "Yes 🤩" : "No 😶‍🌫️"}
                </span>
              </p>
              <div className={`${style.actionDiv}`}>
                <button className={`${style.button}`}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WarehouseDetailsPage;
