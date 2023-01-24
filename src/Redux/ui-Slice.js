import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { activeTab: "simpleBookmarking", isShowNavbarMobile: false },
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    toggleNavbarMobile(state) {
      state.isShowNavbarMobile = !state.isShowNavbarMobile;
    },
  },
});
export default uiSlice;
export const uiActions = uiSlice.actions;
