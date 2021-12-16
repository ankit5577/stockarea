const warehouseModel = require("../models/warehouse.model");
const { sendResponse, sendError } = require("./_helper");

const getAllWarehouse = async (req, res, next) => {
  try {
    const warehouses = await warehouseModel.find({});
    if (!warehouses) {
      sendError(
        {
          title: "no_warehouse",
          msg: "no warehouse found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: "list of warehouse",
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at getAllWarehouse");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

const getWarehouse = async (req, res, next) => {
  try {
    const warehouse = await warehouseModel.findById(req.params.id);
    if (!warehouse) {
      sendError(
        {
          title: "no_warehouse",
          msg: "no warehouse found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: `warehouse ${req.params.id}`,
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at getwarehouse");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

// TODO pending
const createWarehouse = async (req, res, next) => {
  try {
    const exisiting_warehouse = await warehouseModel.find({});
    if (!exisiting_warehouse) {
      sendError(
        {
          title: "no_warehouse",
          msg: "no Warehouse found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: "list of Warehouse",
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at createWarehouse");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

// TODO pending
const deleteWarehouse = async (req, res, next) => {
  try {
    const data = await warehouseModel.find({});
    if (!data) {
      sendError(
        {
          title: "no_warehouse",
          msg: "no Warehouse found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: "list of Products",
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at deleteProduct");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

module.exports = {
  getAllWarehouse,
  getWarehouse,
  createWarehouse,
  deleteWarehouse,
};
