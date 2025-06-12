import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        showPopup: false,
    },
    reducers: {
        setShowPopup: (state, action) => {
            state.showPopup = action.payload;
        }
    }
});

export const { setShowPopup } = appSlice.actions;
export default appSlice.reducer;