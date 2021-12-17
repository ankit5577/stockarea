import { createSlice } from "@reduxjs/toolkit";

export const warehouseSlice = createSlice({
  name: "warehouse",
  initialState: {
    originalWarehouses: [],
    filteredWarehouses: [],
  },
  reducers: {
    filterWarehousesStore: (state, action) => {
      state.filteredWarehouses = state.originalWarehouses.filter(
        (warehouse) => {
          const searchWithin =
            warehouse.name.trim().toLowerCase() +
            warehouse.city.trim().toLowerCase() +
            warehouse.cluster.trim().toLowerCase() +
            String(warehouse.space_available) +
            String(warehouse.code) +
            warehouse.type.trim().toLowerCase();
          const condition = searchWithin.includes(action.payload.searchterm);
          return condition;
        }
      );
    },
    fetchWarehousesStore: (state, action) => {
      state.originalWarehouses = action.payload.data;
    },
  },
});

export const { filterWarehousesStore, fetchWarehousesStore } =
  warehouseSlice.actions;

export default warehouseSlice.reducer;
