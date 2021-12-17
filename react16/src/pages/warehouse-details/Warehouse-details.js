import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loading from "../../components/loading/Loading";
import useHttp from "../../services/Hooks/use-http";
import style from "./Warehouse-details.module.css";

function WarehouseDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [warehouse, setWarehouse] = useState({});
  const [updatedWarehouse, setUpdatedWarehouse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const {
    isLoading: updatingWarehouse,
    error: errorUpdatingWarehouse,
    sendRequest: updateWarehouse,
  } = useHttp(
    `/warehouse/update/${id}`,
    {
      method: "POST",
      body: updatedWarehouse,
    },
    () => {
      alert("Warehouse updated");
      navigate("/");
    }
  );

  const {
    isLoading: fetchingWarehouse,
    error: errorWarehouse,
    sendRequest: fetchingSingleWarehouse,
  } = useHttp(`/warehouse/search/${id}`, {}, (data) => {
    setWarehouse(() => data);
  });

  const updateFormHandler = (target) => {
    setUpdatedWarehouse(() => {
      return {
        ...updatedWarehouse,
        [target["name"]]: target.value,
      };
    });
  };

  const submitFormHandler = () => {
    if (
      !updatedWarehouse.name ||
      !updatedWarehouse.city ||
      !updatedWarehouse.space_available ||
      !updatedWarehouse.type ||
      !updatedWarehouse.cluster ||
      !updatedWarehouse.code ||
      !updatedWarehouse.city
    ) {
      alert("invalid request");
    } else {
      updateWarehouse();
    }
  };

  useEffect(() => {
    fetchingSingleWarehouse();
  }, [id]);

  useEffect(() => {
    setUpdatedWarehouse(() => warehouse);
  }, [warehouse]);

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

            {!isEdit && (
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
                  <span className="font-medium text-grey">
                    {" "}
                    {warehouse.type}
                  </span>
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
                  <button
                    onClick={() => setIsEdit(true)}
                    className={`${style.button}`}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}

            {isEdit && (
              <div className={`${style.detailsDiv} flex-1 flex flex-col gap-2`}>
                <h1
                  className={`heading-2 font-medium text-primary letter-spacing-1`}
                >
                  Editing {warehouse.name}
                </h1>
                <form className={`${style.form}`}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      onKeyUp={(e) => updateFormHandler(e.target)}
                      name="name"
                      id="name"
                      placeholder={updatedWarehouse.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input
                      name="city"
                      onKeyUp={(e) => updateFormHandler(e.target)}
                      placeholder={updatedWarehouse.city}
                      id="city"
                    />
                  </div>
                  <div>
                    <label htmlFor="img">Image</label>
                    <input
                      name="img"
                      onKeyUp={(e) => updateFormHandler(e.target)}
                      placeholder={updatedWarehouse.img}
                      id="img"
                    />
                  </div>
                  <div>
                    <label htmlFor="available_space">Available Space</label>
                    <input
                      name="available_space"
                      id="available_space"
                      onKeyUp={(e) => updateFormHandler(e.target)}
                      placeholder={updatedWarehouse.space_available}
                    />
                  </div>
                  <div>
                    <label htmlFor="type">Type</label>
                    <input
                      name="type"
                      onKeyUp={(e) => updateFormHandler(e.target)}
                      id="type"
                      placeholder={updatedWarehouse.type}
                    />
                  </div>
                  <div>
                    <label htmlFor="cluster">Cluster</label>
                    <input
                      name="cluster"
                      onKeyUp={(e) => updateFormHandler(e.target)}
                      id="cluster"
                      placeholder={updatedWarehouse.cluster}
                    />
                  </div>
                  <div>
                    <label htmlFor="code">Code</label>
                    <input
                      name="code"
                      id="code"
                      onKeyUp={(e) => updateFormHandler(e.target)}
                      placeholder={updatedWarehouse.code}
                    />
                  </div>
                  <div>
                    <label htmlFor="is_live">Status</label>
                    <select
                      name="is_live"
                      onChange={(e) => updateFormHandler(e.target)}
                      value={updatedWarehouse.is_live}
                    >
                      <option value="true">Live</option>
                      <option value="false">Not Live</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="is_registered">Registered</label>
                    <select
                      name="is_registered"
                      onChange={(e) => updateFormHandler(e.target)}
                      value={updatedWarehouse.is_registered}
                    >
                      <option value="true">Registered</option>
                      <option value="false">Not Registered</option>
                    </select>
                  </div>
                </form>
                <div className={`${style.actionDiv} mx-auto`}>
                  <button
                    type="button"
                    onClick={() => submitFormHandler()}
                    className={`${style.button}`}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEdit(false)}
                    className={`${style.buttonCancel} my-2`}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WarehouseDetailsPage;
