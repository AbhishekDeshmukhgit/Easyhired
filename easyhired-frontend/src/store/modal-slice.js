import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalIsVisible",
  initialState: { modalVisible: false },
  reducers: {
    showModal(state) {
        state.modalVisible = true;
    },
    hideModal(state) {
      state.modalVisible = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
