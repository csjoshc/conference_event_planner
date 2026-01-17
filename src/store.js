// store.js
import { configureStore } from "@reduxjs/toolkit";
import venueReducer from "./venueSlice";
import avReducer from "./avSlice";
import mealsReducer from "./mealsSlice";

export default configureStore({
  reducer: {
    // global react state venue is mapped to
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer,
  },
});
