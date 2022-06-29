import {configureStore} from "@reduxjs/toolkit";
import portfolioReducer from "./todoSlice"


export default configureStore({
    reducer: {
        portfolio: portfolioReducer,
    }
})