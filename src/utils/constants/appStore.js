import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../constants/cartSlice";
import newSareeSlice from "./newSareeSlice";
import appSlice, { setShowPopup } from "./appSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    newSaree: newSareeSlice,
    app: appSlice,
  },
});

export default appStore;
