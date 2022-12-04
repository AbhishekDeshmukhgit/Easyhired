import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import modalSlice from "./modal-slice";
import themeSlice from "./theme-slice";

const store = configureStore({
    reducer: {
        auth : authSlice.reducer,
        modal: modalSlice.reducer,
        theme: themeSlice.reducer,
    }
})

export default store;