import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../constants/cartSlice";
import newSareeSlice from "./newSareeSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    newSaree: newSareeSlice,
  },
});

export default appStore;
