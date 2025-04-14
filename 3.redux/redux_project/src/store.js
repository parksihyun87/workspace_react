import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // 불이 안들어옴.
  },
});
export default store;