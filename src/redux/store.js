import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import offerReducer from "./offerSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        offer: offerReducer
    }
})