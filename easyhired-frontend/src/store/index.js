import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
    reducer: {
        auth : authSlice.reducer,
        modal: modalSlice.reducer
    }
})

export default store;