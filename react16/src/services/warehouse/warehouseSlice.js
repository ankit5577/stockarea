import { createSlice } from "@reduxjs/toolkit";

export const warehouseSlice = createSlice({
  name: "warehouse",
  initialState: {
    originalWarehouses: [],
    filteredWarehouses: [],
  },
  reducers: {
    filterWarehousesStore: (state, action) => {
      console.log(action);
      switch (action.payload.type) {
        case "SEARCH_PRODUCT":
          state.filteredWarehouses = state.originalWarehouses.filter(
            (warehouse) => {
              const searchWithin =
                warehouse.name.trim().toLowerCase() +
                warehouse.city.trim().toLowerCase() +
                warehouse.cluster.trim().toLowerCase() +
                String(warehouse.space_available) +
                String(warehouse.code) +
                warehouse.type.trim().toLowerCase();
              const condition = searchWithin.includes(
                action.payload.searchterm
              );
              return condition;
            }
          );
          break;
        case "AVAILABLE_FILTER":
          console.log(action.payload.data);
          state.filteredWarehouses = state.originalWarehouses.filter(
            (warehouse) => action.payload.data === warehouse.is_live
          );
          break;
        default:
          console.log("default redux");
          break;
      }
    },
    fetchWarehousesStore: (state, action) => {
      state.originalWarehouses = action.payload.data;
    },
  },
});

export const { filterWarehousesStore, fetchWarehousesStore } =
  warehouseSlice.actions;

export default warehouseSlice.reducer;
