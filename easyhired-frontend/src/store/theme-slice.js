import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "changeSiteTheme",
  initialState: { siteTheme: "light" },
  reducers: {
    changeTheme(state) {
      state.siteTheme = state.siteTheme === "light" ? "dark" : "light";
    },
    // showModal(state) {
    //     state.modalVisible = true;
    // },
    // hideModal(state) {
    //   state.modalVisible = false;
    // },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
