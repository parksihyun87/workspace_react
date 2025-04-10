import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./couterSlice";

const store = configureStore({
    
    reducer:{
        counter: counterSlice.reducer,
    }
});

export default store;