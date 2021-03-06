import React from "react";
import style from "./productListCard.module.css";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

function ProductListCard({ warehouse }) {
  return (
    <div
      className={`flex flex-row gap-2 border mx-2 border-radius-lg ${style.listDiv}`}
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
          <h2 className="heading-2 font-light">{warehouse.name}</h2>
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
          <div className={`${style.underSubHeader} flex flex-col gap-2`}>
            <p className={`text-left text-grey`}>
              Code:{" "}
              <span className="text-primary font-bold numberFont">
                {" "}
                {warehouse.code}
              </span>
            </p>
            <p className={`text-left text-grey`}>
              Space Available:{" "}
              <span className="text-primary font-light">
                {warehouse.space_available}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListCard;
