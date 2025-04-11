import { configureStore } from '@reduxjs/toolkit';
import blackListReducer from './blackListSlice';

const store = configureStore({
  reducer: {
    BlackList: blackListReducer,
  },
});

export default store;
