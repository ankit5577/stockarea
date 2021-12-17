import { configureStore } from "@reduxjs/toolkit";
import warehouseSlice from "../services/warehouse/warehouseSlice";

export default configureStore({
  reducer: {
    warehouse: warehouseSlice,
  },
});
