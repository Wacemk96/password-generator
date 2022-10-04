import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from './passwordSlice';

const store = configureStore({
  reducer: {
    password: passwordReducer,
  },
});

export default store;
