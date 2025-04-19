import { createSlice } from "@reduxjs/toolkit";

const newSareeSlice = createSlice({
  name: "newSaree",
  initialState: {
    newSaree: [],
  },
  reducers: {
    addNewSaree: (state, action) => {
      state.newSaree.unshift(action.payload);
    },
  },
});

export const { addNewSaree } = newSareeSlice.actions;
export default newSareeSlice.reducer;
