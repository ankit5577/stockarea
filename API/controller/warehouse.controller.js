const router = require("express").Router();
const {
  getAllWarehouse,
  createWarehouse,
  getWarehouse,
  deleteWarehouse,
  updateWarehouse,
} = require("../functions/warehouse.function");

// get all warehouses
router.get("/all", getAllWarehouse);

// get single warehouse by ID
router.get("/search/:id", getWarehouse);

// update warehouse by id
router.post("/update/:id", updateWarehouse);

// create warehouse
router.put("/create", createWarehouse);

// delete warehouse by ID
router.delete("/delete", deleteWarehouse);

module.exports = router;
