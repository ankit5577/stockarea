const router = require("express").Router();
const {
  getAllWarehouse,
  createWarehouse,
  getWarehouse,
  deleteWarehouse,
} = require("../functions/warehouse.function");

// get all warehouses
router.get("/all", getAllWarehouse);

// get single warehouse by ID
router.get("/:id", getWarehouse);

// create warehouse
router.put("/create", createWarehouse);

// delete warehouse by ID
router.delete("/delete", deleteWarehouse);

module.exports = router;
